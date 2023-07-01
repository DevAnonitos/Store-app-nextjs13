import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

import { SessionInterface, UserProfile } from "@/common.types";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    jwt: {
        encode: ({ secret, token }) => {
            const encodedToken = jsonwebtoken.sign({
                ...token,
                iss: "grafbase",
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
            }, secret);

            return encodedToken;
        },
        decode: ({ secret, token }) => {
            const decodedToken = jsonwebtoken.verify(token!, secret);

            return decodedToken as JWT;
        },
    },
    theme: {
        colorScheme: "dark",
        logo: "/logo.svg",
    },
    callbacks: {
        async session({ session }) {

            const email = session?.user?.email as string;

            try {

            } catch (error: any) {
                console.log("Error retrieving user data: ", error.message);
                return session;
            }
        },
        async signIn({ user }: {
            user: AdapterUser | User
        }) {
            try {

                return true
            } catch (error: any) {
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        },
    },
};

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
};
