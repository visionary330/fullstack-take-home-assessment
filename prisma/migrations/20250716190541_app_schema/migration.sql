-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "app_schema";

-- CreateTable
CREATE TABLE "app_schema"."Post" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "content" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "app_schema"."Post"("title");
