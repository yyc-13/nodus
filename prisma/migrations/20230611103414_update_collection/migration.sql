/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContentToFavorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToFavorite" DROP CONSTRAINT "_ContentToFavorite_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToFavorite" DROP CONSTRAINT "_ContentToFavorite_B_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "pfp" SET DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/default-pfp.jpeg';

-- DropTable
DROP TABLE "Favorite";

-- DropTable
DROP TABLE "_ContentToFavorite";

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'default name',
    "coverPhoto" TEXT DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/default-collection-cover.png',
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionContent" (
    "collectionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "CollectionContent_pkey" PRIMARY KEY ("collectionId","contentId")
);

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionContent" ADD CONSTRAINT "CollectionContent_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionContent" ADD CONSTRAINT "CollectionContent_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
