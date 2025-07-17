"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { createPost } from "~/server/actions/create-post";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";

import { Loader2, PenSquare } from "lucide-react";

export default function CreatePostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isDisabled = !title.trim() || !content.trim();

  const { execute, status, result } = useAction(createPost, {
    onSuccess: () => {
      setTitle("");
      setContent("");
      router.push("/");
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isDisabled || status === "executing") return;
      execute({ title, content });
    },
    [execute, title, content, isDisabled, status]
  );

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-transparent p-6">
      <Card className="w-full max-w-md shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <CardHeader className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <PenSquare className="mr-2 h-8 w-8 text-blue-600" />
            <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
              Create New Post
            </CardTitle>
          </div>
          <CardDescription className="text-gray-600">
            Share your thoughts with the community.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title Field */}
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 w-full rounded-md border px-4 py-2 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Content Field */}
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="mt-1 min-h-[120px] w-full rounded-md border px-4 py-2 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="flex w-full items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
              disabled={isDisabled || status === "executing"}
            >
              {status === "executing" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Post"
              )}
            </Button>

            {/* Error Feedback */}
            {result?.serverError && (
              <p className="text-center text-sm text-red-600" role="alert">
                {result.serverError}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
