/*
  Warnings:

  - You are about to drop the column `file` on the `Sample` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sample" DROP COLUMN "file",
ADD COLUMN     "files" TEXT[];
