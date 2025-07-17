"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-background px-4 py-20 text-center">
      <div className="rounded-lg border border-border bg-card px-10 py-16 shadow-md">
        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Page Not Found</p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
