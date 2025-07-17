import { currentUser } from "@clerk/nextjs/server";
import { getPostsWithUsers } from "../server/actions/get-post";
import { PostList } from "./_components/PostList";
import { MessageCircle } from "lucide-react";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="space-y-6 p-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
            <MessageCircle className="h-12 w-12 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold text-transparent">
              No Posts Visible
            </h1>
            <p className="mx-auto max-w-md text-lg text-gray-600">
              Sign in to view and interact with community posts
            </p>
          </div>
        </div>
      </div>
    );
  }

  const postsWithUsers = await getPostsWithUsers();

  return (
    <PostList postsWithUsers={postsWithUsers} currentUserId={user.id} />
  );
}