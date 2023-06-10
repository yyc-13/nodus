/*
  Warnings:

  - You are about to drop the `UserInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "coverPhoto" TEXT NOT NULL DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/default-cover.jpeg',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "introduction" TEXT,
ADD COLUMN     "pfp" TEXT NOT NULL DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/Default_pfp.png',
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "userId" TEXT,
ADD COLUMN     "userName" TEXT NOT NULL DEFAULT 'New User';

-- DropTable
DROP TABLE "UserInfo";
