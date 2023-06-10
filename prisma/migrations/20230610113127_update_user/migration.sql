/*
  Warnings:

  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;
