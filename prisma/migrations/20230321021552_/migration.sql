/*
  Warnings:

  - You are about to drop the column `paymentType` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `paymentType` on the `Audio` table. All the data in the column will be lost.
  - You are about to drop the column `paymentType` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `paymentType` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "paymentType";

-- AlterTable
ALTER TABLE "Audio" DROP COLUMN "paymentType";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "paymentType";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "paymentType";

-- DropEnum
DROP TYPE "PaymentType";
