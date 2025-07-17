"use client";

import { useState, useCallback } from "react";
import { Trash2 } from "lucide-react";
import { deletePost } from "~/server/actions/delete-post";

interface DeletePostButtonProps {
  postId: string;
  currentUserId: string;
  postUserId: string;
}

export function DeletePostButton({
  postId,
  currentUserId,
  postUserId,
}: DeletePostButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = useCallback(async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const result = await deletePost(postId);
      if (!result.success) {
        throw new Error(result.error ?? "Failed to delete post");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert(err instanceof Error ? err.message : "Failed to delete post");
    } finally {
      setIsDeleting(false);
    }
  }, [postId]);

  // ✅ Conditional rendering after hook calls
  if (currentUserId !== postUserId) return null;

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      aria-label="Delete post"
      className="group/delete flex items-center space-x-2 text-gray-500 transition-colors duration-200 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2 className="h-5 w-5 transition-transform duration-200 group-hover/delete:scale-110" />
      <span className="text-sm font-medium">
        {isDeleting ? "Deleting..." : "Delete"}
      </span>
    </button>
  );
}