import { PrismaClient } from "@prisma/client";
import type { Post } from "@prisma/client";

const prisma = new PrismaClient();

async function createPost(
	postInput: Pick<Post, "title" | "content">,
	userId: number
) {
	return prisma.post.create({ data: { ...postInput, authorId: userId } });
}

async function getPosts(userId: number) {
	return prisma.post.findMany({
		where: {
			authorId: userId,
		},
	});
}

export { createPost, getPosts };
