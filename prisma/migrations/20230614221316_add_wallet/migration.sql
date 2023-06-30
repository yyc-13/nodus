/*
  Warnings:

  - You are about to drop the column `wallets` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "wallets",
ADD COLUMN     "wallet" TEXT;
