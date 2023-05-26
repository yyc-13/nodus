/*
  Warnings:

  - You are about to drop the column `content` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `PreviewUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProdUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FavoriteToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `message` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentId` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('AUDIO', 'DOC', 'IMAGE', 'VIDEO', 'TEXT');

-- DropForeignKey
ALTER TABLE "PreviewUrl" DROP CONSTRAINT "PreviewUrl_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProdUrl" DROP CONSTRAINT "ProdUrl_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_productId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteToProduct" DROP CONSTRAINT "_FavoriteToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteToProduct" DROP CONSTRAINT "_FavoriteToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "content",
ADD COLUMN     "answer" TEXT NOT NULL DEFAULT 'answer placeholder',
ALTER COLUMN "questionId" SET DEFAULT 'clgegvloq01k5lqyhx4bq69bu';

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "content",
ADD COLUMN     "message" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "amount",
DROP COLUMN "currency",
DROP COLUMN "paymentMethod",
DROP COLUMN "productId",
ADD COLUMN     "contentId" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "content",
DROP COLUMN "productId",
ADD COLUMN     "contentId" TEXT NOT NULL DEFAULT 'clgegusax018hlqyhold3j59r',
ADD COLUMN     "question" TEXT NOT NULL DEFAULT 'question placeholder';

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "productId",
ADD COLUMN     "contentId" TEXT NOT NULL DEFAULT 'clgegusax018hlqyhold3j59r',
ADD COLUMN     "review" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL DEFAULT 'clgegrocx0000lqyh4g76e3qh';

-- DropTable
DROP TABLE "PreviewUrl";

-- DropTable
DROP TABLE "ProdUrl";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "_FavoriteToProduct";

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "free" BOOLEAN NOT NULL,
    "sub" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,
    "freeSample" BOOLEAN NOT NULL,
    "fileType" "FileType" NOT NULL,
    "files" TEXT[],
    "creatorId" TEXT NOT NULL,
    "tags" TEXT[],
    "mainCategory" TEXT[],
    "secondCategory" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fileType" "FileType" NOT NULL,
    "file" TEXT,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sample" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fileType" "FileType" NOT NULL,
    "file" TEXT,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContentToFavorite" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_contentId_key" ON "Card"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "Sample_contentId_key" ON "Sample"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentToFavorite_AB_unique" ON "_ContentToFavorite"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentToFavorite_B_index" ON "_ContentToFavorite"("B");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToFavorite" ADD CONSTRAINT "_ContentToFavorite_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToFavorite" ADD CONSTRAINT "_ContentToFavorite_B_fkey" FOREIGN KEY ("B") REFERENCES "Favorite"("id") ON DELETE CASCADE ON UPDATE CASCADE;
