/*
  Warnings:

  - Added the required column `creatorId` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverPhoto` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pfp` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserInfo" ADD COLUMN     "coverPhoto" TEXT NOT NULL,
ADD COLUMN     "pfp" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
