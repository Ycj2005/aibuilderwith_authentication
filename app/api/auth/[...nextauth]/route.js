import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import DBconnection from "@/Database/db.connection";
import usermodel from "@/Database/models/user.model";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",

      //   credentials: {
      //     email: { label: "email", type: "email" },
      //     password: {
      //       label: "password",
      //       type: "text",
      //     },
      //   },
      async authorize(credentials) {
        await DBconnection();
        const user = await usermodel
          .findOne({ email: credentials.email })
          .select("+password");

        if (!user) throw new Error("Email is invalid");

        const passwordmatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // console.log(passwordmatch);
        
        if (!passwordmatch) throw new Error("Password is invalid");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        (token.email = user.email), (token.name = user.name);
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        (session.user.email = token.email), (session.user.name = token.name);
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 2592000,
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
