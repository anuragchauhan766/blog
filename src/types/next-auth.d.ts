import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    provider: string;
    user: {
      id: string;

      access_token?: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    access_token?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    access_token?: string;
    provider: string;
    id: string;
  }
}
