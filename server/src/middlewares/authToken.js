import jwt from "jsonwebtoken";
import userModel from "../api/user/userModel";
import "../config";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.get("Authorization");
    // const token = req.headers['x-token']

    if (!token) return res.json({ ok: false, message: "not token" });

    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await userModel.findById({ _id: decoded.id });
    if (!user) return res.json({ ok: false, message: "user no existe!!" });

    console.log(decoded);
    next();
  } catch (err) {
    res.json({ ok: false, err });
  }
};
