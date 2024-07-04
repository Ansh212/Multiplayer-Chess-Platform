import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dea35035ec63c5c13d25af407286138e0d7f8e74ad1b8793d1cf9a0ef8d37122';

export const extractUserId = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
  return decoded.userId;
};