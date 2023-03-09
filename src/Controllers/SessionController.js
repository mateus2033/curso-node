import * as Yup from 'yup';
import User from '../Models/User';

class SessionController {
  async storage(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
}

export default new SessionController();
