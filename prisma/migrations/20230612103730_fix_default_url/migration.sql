-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "coverPhoto" SET DEFAULT 'default.png';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "coverPhoto" SET DEFAULT 'default-cover.jpeg',
ALTER COLUMN "pfp" SET DEFAULT 'default-pfp.jpeg';
