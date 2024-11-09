import NextAuth, { AuthOptions, getServerSession, Session } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db/schema";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: DrizzleAdapter(db),
  providers: [
    GitlabProvider({
      clientId:
        "fda2cf167bd06925e09c444095c4a5728a71f56869f6db75fc39c68c9878c41c",
      clientSecret:
        "gloas-a4e2c544cefa4915f7b1860d198ffcc5f1a02a28eb4e50bcb94bb1f7da44aaad",
    }),
  ],
};

const handler = NextAuth(authOptions);
export const serverSession = await getServerSession<AuthOptions, Session>(
  authOptions
);
export { handler as GET, handler as POST };
