"use server"

import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

export async function into(username: string, password: string) {
    try {
        // Extract the body from the request

        // Check if the user exists in the database
        const user = await client.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user) {
            return { error: "User not found" , status: 404 }
        }

        // Match the password (you should hash passwords using bcrypt)
        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
            return { error: "Invalid credentials" , status: 401 }
            
        }

        // Return a success message
        return { message: "Signed in successfully", status: 200 }
        
    } catch (error) {
        console.error(error);
        return { error: "An error occurred during sign-in" , status: 500 }
        
    }
}