declare namespace Express {
  interface Request {
    userID: any | JwtPayload;
  }
}
