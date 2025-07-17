import { db } from "~/server/db";
import { clerkClient } from "@clerk/nextjs/server";
import type { PostWithUser, ClerkUser } from "../../types/types";


export async function getPostsWithUsers(): Promise<PostWithUser[]> {
    const posts = await db.post.findMany({
        orderBy: { createdAt: "desc" },
    });

    const postsWithUsers = await Promise.all(
        posts.map(async (post) => {
            let userData: ClerkUser | null = null;
            if (post.userId) {
                try {
                    const client = await clerkClient();
                    userData = await client.users.getUser(post.userId);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
            return {
                ...post,
                user: userData,
                createdAt: post.createdAt instanceof Date ? post.createdAt : new Date(post.createdAt),
            };
        })
    );

    return postsWithUsers;
}