import Parkir from "../model/parkir.js";
import User from "../model/user.js";

export default class ParkirController {
  static async order(req, res) {
    const { duration, nopol } = req.body;

    const user_id = req.userId;

    const price = 3000;

    const total = duration * price;

    const parkir = await Parkir.create({ user_id, nopol, duration, total });

    return res.json({ parkir });
  }

  static async get(req, res) {
    const user_id = req.userId;

    const parkir = await Parkir.findAll({
      where: { user_id: user_id },
      include: [User],
    });

    res.json({ parkir });
  }

  static async update(req, res) {
    const parkir_id = req.params.id;

    const { duration, nopol } = req.body;

    const price = 3000;

    const total = duration * price;

    const update = await Parkir.update(
      { duration, nopol, total },
      { where: { id: parkir_id } }
    );

    return res.json({ update });
  }

  static async cancel(req, res) {
    const parkir_id = req.params.id;

    const deleteData = await Parkir.destroy({ where: { id: parkir_id } });

    return res.json({ deleteData });
  }
}
