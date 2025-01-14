"use server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function up(username: string, password: string) {
    try {
        // Check if the username already exists
        const existingUser = await client.user.findUnique({
            where: { username: username },
        });

        if (existingUser) {
            return { status: 409, message: "Username already exists!" };
        }

        // Store the new user in the database with plaintext password
        await client.user.create({
            data: {
                username: username,
                password: password, // Store plaintext password
            },
        });

        return { status: 201, message: "Signed up successfully! Redirecting..." };
    } catch (error) {
        console.error("Signup Error:", error);
        return { status: 500, message: "An error occurred during signup" };
    }
}