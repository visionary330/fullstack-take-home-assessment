"use client";

export const dynamic = "force-dynamic";

import type { ReactNode } from "react";

export default function CreateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
