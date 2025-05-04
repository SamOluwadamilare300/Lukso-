"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"
import type { CommentFormData, Comment } from "@/types"

export async function createComment(
  formData: CommentFormData,
): Promise<{ success: boolean; message: string; comment?: Comment }> {
  try {
    const { content, authorName, authorAddress, signalId, network } = formData

    const newComment = await prisma.comment.create({
      data: {
        content,
        authorName: authorName || "Anonymous",
        authorAddress: authorAddress || "0x0000000000000000000000000000000000000000",
        signalId,
        network,
      },
    })

    // Revalidate the signal page to show the new comment
    revalidatePath(`/app/signals/${signalId}`)

    return {
      success: true,
      message: "Comment added successfully",
      comment: {
        id: newComment.id,
        content: newComment.content,
        authorName: newComment.authorName,
        authorAddress: newComment.authorAddress,
        createdAt: newComment.createdAt,
        signalId: newComment.signalId,
        network: (["Mainnet", "Testnet", "Unknown"] as const).includes(newComment.network as any)
          ? (newComment.network as "Mainnet" | "Testnet" | "Unknown")
          : "Unknown",
      },
    }
  } catch (error) {
    console.error("Error creating comment:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function getCommentsBySignalId(signalId: number): Promise<Comment[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        signalId,
      },
      orderBy: {
        createdAt: "asc",
      },
    })

    return comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      authorName: comment.authorName,
      authorAddress: comment.authorAddress,
      createdAt: comment.createdAt,
      signalId: comment.signalId,
      network: (["Mainnet", "Testnet", "Unknown"] as const).includes(comment.network as any)
        ? (comment.network as "Mainnet" | "Testnet" | "Unknown")
        : "Unknown",
    }))
  } catch (error) {
    console.error(`Error fetching comments for signal ${signalId}:`, error)
    return []
  }
}
