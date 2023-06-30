-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "questionId" DROP DEFAULT,
ALTER COLUMN "answer" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "name" SET DEFAULT 'unnamed',
ALTER COLUMN "coverPhoto" SET DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/Collection%20Cover/image/default.png';

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "contentId" DROP DEFAULT,
ALTER COLUMN "question" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "contentId" DROP DEFAULT,
ALTER COLUMN "userId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "coverPhoto" SET DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/default-cover.jpeg',
ALTER COLUMN "pfp" SET DEFAULT 'https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/public/default-pfp.jpeg';
