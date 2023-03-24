-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('SUBSCRIPTION', 'ONE_TIME');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER,
    "paymentType" "PaymentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "video" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Art" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Art_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audio" (
    "id" TEXT NOT NULL,
    "url" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Audio_pkey" PRIMARY KEY ("id")
);
