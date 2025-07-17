
import type { PostWithUser } from "../../types/types";
import { Calendar, MessageCircle, Heart, Share2, User } from "lucide-react";
import { DeletePostButton } from "./DeleteButton";
import Image from "next/image";

interface PostListProps {
  postsWithUsers: PostWithUser[];
  currentUserId: string;
}

export function PostList({ postsWithUsers, currentUserId }: PostListProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            All Posts
          </h1>
          <p className="text-gray-600">
            Discover what the community is sharing
          </p>
        </div>
      </div>

      {postsWithUsers.length === 0 && (
        <div className="py-16 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <MessageCircle className="h-10 w-10 text-gray-400" />
          </div>
          <p className="text-xl font-medium text-gray-500">No posts yet.</p>
          <p className="mt-2 text-gray-400">Be the first to share something!</p>
        </div>
      )}

      <div className="grid gap-6">
        {postsWithUsers.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
          >
            <div className="space-y-4">
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                    {post.user?.imageUrl ? (
                      <Image
                        src={post.user.imageUrl ?? "/placeholder.svg"}
                        alt={post.user.firstName ?? "User"}
                        className="h-full w-full object-cover"
                        width={500}
                        height={400}
                      />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {post.user?.firstName && post.user?.lastName
                        ? `${post.user.firstName} ${post.user.lastName}`
                        : post.user?.username ??
                        post.user?.emailAddresses?.[0]?.emailAddress ??
                        "Anonymous User"}
                    </p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.createdAt.toISOString()}>
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-700">
                  {post.content}
                </p>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-6">
                  <button className="group/like flex items-center space-x-2 text-gray-500 transition-colors duration-200 hover:text-red-500">
                    <Heart className="h-5 w-5 transition-transform duration-200 group-hover/like:scale-110" />
                    <span className="cursor-pointer text-sm font-medium">
                      Like
                    </span>
                  </button>
                  <button className="group/comment flex items-center space-x-2 text-gray-500 transition-colors duration-200 hover:text-blue-500">
                    <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover/comment:scale-110" />
                    <span className="cursor-pointer text-sm font-medium">
                      Comment
                    </span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="group/share flex cursor-pointer items-center space-x-2 text-gray-500 transition-colors duration-200 hover:text-green-500">
                    <Share2 className="h-5 w-5 transition-transform duration-200 group-hover/share:scale-110" />
                    <span className="cursor-pointer text-sm font-medium">
                      Share
                    </span>
                  </button>
                  <DeletePostButton
                    postId={post.id}
                    currentUserId={currentUserId}
                    postUserId={post.userId || ""}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}