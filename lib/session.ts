import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {

    //     },
    //     decode: ({ secret, token }) => {

    //     },
    // },
    theme: {
        colorScheme: "dark",
        logo: "/logo.svg",
    },
    callbacks: {
        async session({ session }) {

            const email = session?.user?.email as string;

            try {

            } catch (error: any) {
                console.log(error);
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
    const session = await getServerSession(authOptions);

    return session;
};
