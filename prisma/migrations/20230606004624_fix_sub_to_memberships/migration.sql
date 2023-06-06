/*
  Warnings:

  - You are about to drop the column `sub` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `membership` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_contentId_fkey";

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "sub",
ADD COLUMN     "membership" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Purchase";

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentMembership" (
    "contentId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,

    CONSTRAINT "ContentMembership_pkey" PRIMARY KEY ("contentId","membershipId")
);

-- CreateTable
CREATE TABLE "PurchaseContent" (
    "id" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "transactionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseMembership" (
    "id" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "transactionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchaseMembership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContentMembership" ADD CONSTRAINT "ContentMembership_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMembership" ADD CONSTRAINT "ContentMembership_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseContent" ADD CONSTRAINT "PurchaseContent_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseContent" ADD CONSTRAINT "PurchaseContent_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseMembership" ADD CONSTRAINT "PurchaseMembership_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseMembership" ADD CONSTRAINT "PurchaseMembership_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
