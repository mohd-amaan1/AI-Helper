"use server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function showUser() {
    const user = await client.user.findFirst({
        orderBy: {
            id: 'desc', // Sort by creation time in descending order
        },
    });
    return { name: user?.username };
}