import { prisma } from '@/prisma/client';
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "name", placeholder: "optional" },
                email: { label: "Email", type: "email", placeholder: "aka@example.com" },
                password: { label: "Password", type: "password", placeholder: "password" },
                isSignup: { label: "Signup", type: "checkbox" } // Optional: if you want to toggle between login and signup
            },
            async authorize(credentials, req) {
                const { name, email, password, isSignup } = credentials!;
                
                if (!email || !password) return null;

                if (isSignup) {
                    // Sign Up Logic
                    const existingUser = await prisma.user.findUnique({
                        where: { email },
                    });
                    if (existingUser) {
                        return null; // User already exists
                    }
                    // Hash the password and create a new user
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const newUser = await prisma.user.create({
                        data: {
                            name,
                            email,
                            hashedPassword,
                        },
                    });
                    return newUser;
                } else {
                    // Login Logic
                    const user = await prisma.user.findUnique({
                        where: { email },
                    });
                    if (!user) return null;
                    const passwordMatch = await bcrypt.compare(password, user.hashedPassword!);
                    return passwordMatch ? user : null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
};
