/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `PurchaseContent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transactionId]` on the table `PurchaseMembership` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[walletAddress]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PurchaseContent_transactionId_key" ON "PurchaseContent"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseMembership_transactionId_key" ON "PurchaseMembership"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");
