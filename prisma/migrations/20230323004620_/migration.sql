/*
  Warnings:

  - The `url` column on the `Audio` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `video` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `Art` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Audio" ADD COLUMN     "preview" TEXT[],
DROP COLUMN "url",
ADD COLUMN     "url" TEXT[];

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "video",
ADD COLUMN     "preview" TEXT[],
ADD COLUMN     "url" TEXT[];

-- DropTable
DROP TABLE "Art";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT[],
    "preview" TEXT[],
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT[],
    "preview" TEXT[],
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
