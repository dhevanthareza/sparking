import express from "express";
import UserController from "./controllers/userController.js";
import authenticate from "./middleware/authenticate.js";
import axios from "axios"
import ParkirController from "./controllers/parkirController.js";
const router = express.Router();

// USER
router.get("/user", UserController.get);
router.get("/user/me", authenticate, UserController.me);
router.get("/user/:id", UserController.detail);
router.post("/user", UserController.store);
router.post("/user/register", UserController.register);
router.post("/user/login", UserController.login);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

// parkir
router.post("/parkir", authenticate, ParkirController.order);
router.get("/parkir", authenticate, ParkirController.get);
router.put("/parkir/:id", authenticate, ParkirController.update);
router.delete("/parkir/:id", authenticate, ParkirController.cancel);

router.get("/bitcoin-price-index", async (req, res) => {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    return res.json(response.data)
})
export default router;
