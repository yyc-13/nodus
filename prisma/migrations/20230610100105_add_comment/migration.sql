/*
  Warnings:

  - You are about to drop the column `nickname` on the `UserInfo` table. All the data in the column will be lost.
  - Added the required column `userID` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Made the column `introduction` on table `UserInfo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "nickname",
ADD COLUMN     "userID" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
ALTER COLUMN "introduction" SET NOT NULL;

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "commentContent" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
