"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { PlusCircle, Home, Users } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
          aria-label="Go to homepage"
        >
          <Users className="h-6 w-6 text-blue-600" />
          <span>Blog</span>
        </Link>

        {/* Auth Buttons / Actions */}
        <div className="flex items-center gap-3">
          {/* Not signed in */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          {/* Signed in */}
          <SignedIn>
            <Button
              asChild
              variant="ghost"
              className="transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href="/create" aria-label="Create a new post">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Post
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="transition-colors hover:bg-purple-50 hover:text-purple-700"
            >
              <Link href="/" aria-label="View all posts">
                <Home className="h-4 w-4 mr-2" />
                All Posts
              </Link>
            </Button>

            {/* User Button */}
            <div className="ml-2 border-l border-gray-200 pl-2">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "w-9 h-9 ring-2 ring-blue-300 hover:ring-blue-500 transition-all duration-200 shadow-sm",
                    userButtonPopoverCard:
                      "rounded-lg shadow-xl border border-gray-100 bg-white p-2",
                    userButtonPopoverActionButton:
                      "text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md px-3 py-2 transition-colors duration-200",
                    userButtonPopoverActionButtonText: "font-medium",
                    userButtonPopoverFooter: "pt-2 mt-2 border-t border-gray-100",
                    userButtonPopoverMain: "p-0",
                    userButtonPopoverHeader: "px-3 py-2 text-sm text-gray-500",
                    userButtonPopoverRow: "px-0 py-1",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
