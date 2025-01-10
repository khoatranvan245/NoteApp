import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../model/user";
import tokenType from "../type/tokenType";

const login = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  const user = await User.exists({ username, password });

  if (!user) {
    return res.status(400).json({ error: "Username or password invalid" });
  }

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN as Secret, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN as Secret, {
    expiresIn: "30d",
  });

  return res.status(200).json({ token, refreshToken });
};

const refreshToken = async (req: Request, res: Response): Promise<any> => {
  const { refreshToken } = req.body;

  try {
    const decode = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN as Secret,
    ) as tokenType;

    const token = jwt.sign(
      { user: decode.user._id },
      process.env.ACCESS_TOKEN as Secret,
      { expiresIn: "30m" },
    );

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({ error: "Refresh token invalid!" });
  }
};

export { login, refreshToken };
