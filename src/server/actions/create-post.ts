'use server'

import { z } from 'zod'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '~/server/db'
import { action } from '~/lib/safe-action'
import type { Prisma } from '@prisma/client'

// Input validation schema
const createPostSchema = z.object({
  title: z.string().min(1, "Title must be at least 1 character"),
  content: z.string().min(1, "Content must be at least 1 character")
})

export const createPost = action
  .inputSchema(createPostSchema)
  .action(async ({ parsedInput }) => {
    const user = await currentUser()
    if (!user) throw new Error('Authentication required')

    try {
      const newPost = await db.post.create({
        data: {
          title: parsedInput.title,
          content: parsedInput.content,
          userId: user.id,
        } satisfies Prisma.PostCreateInput
      })
      return newPost
    } catch (error) {
      console.error('Failed to create post:', error)
      throw new Error('Failed to create post')
    }
  })