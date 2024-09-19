import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const saltRound = 10;
  return bcrypt.hash(password, saltRound);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return bcrypt.compare(password, hashedPassword);
};
