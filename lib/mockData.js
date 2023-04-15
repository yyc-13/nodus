// insert mock data: node lib/seed.js
const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

const sampleFileUrls = [
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file-example_PDF_1MB.pdf",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file-sample_1MB.doc",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_AVI_1280_1_5MG.avi",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_GIF_500kB.gif",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_JPG_100kB.jpg",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_MOV_480_700kB.mov",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_MOV_640_800kB.mov",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_MP3_1MG.mp3",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_PNG_500kB.png",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_PPT_250kB.ppt",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_WAV_1MG.wav",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/file_example_XLS_10.xls",
  "https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/sample-files/zip_9MB.zip",
];

async function insertSampleUrls() {
  console.log("inserting sample urls...");
  const prodUrls = await prisma.prodUrl.findMany();
  const previewUrls = await prisma.previewUrl.findMany();
  const getRandomUrl = () =>
    sampleFileUrls[Math.floor(Math.random() * sampleFileUrls.length)];
  console.log("updating urls...");
  for (const prodUrl of prodUrls) {
    await prisma.prodUrl.update({
      where: { id: prodUrl.id },
      data: { url: getRandomUrl() },
    });
  }
  for (const previewUrl of previewUrls) {
    await prisma.previewUrl.update({
      where: { id: previewUrl.id },
      data: { url: getRandomUrl() },
    });
  }
  console.log("sample urls inserted");
}

insertSampleUrls()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// GPT-4
async function createMockData() {
  const users = [];
  const products = [];
  // create users & products
  for (let i = 0; i < 50; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
      },
    });

    users.push(user);

    await prisma.userInfo.create({
      data: {
        nickname: faker.internet.userName(),
        introduction: faker.lorem.sentence(),
        balance: faker.datatype.number({ min: 0, max: 10000 }),
        userId: user.id,
      },
    });

    for (let j = 0; j < 5; j++) {
      if (i > 25) {
        continue;
      }
      const product = await prisma.product.create({
        data: {
          title: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          price: faker.datatype.number({ min: 10, max: 1000 }),
          type: faker.commerce.department(),
          sellerId: user.id,
        },
      });
      products.push(product);
      for (let x = 0; x < 3; x++) {
        await prisma.prodUrl.create({
          data: {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            url: faker.internet.url(),
            productId: product.id,
          },
        });

        await prisma.previewUrl.create({
          data: {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            url: faker.internet.url(),
            productId: product.id,
          },
        });
      }
    }
  }
  console.log("users and products created ");
  // create questions, answers, reviews
  for (let j = 0; j < 600; j++) {
    const question = await prisma.question.create({
      data: {
        content: faker.lorem.sentence(),
        authorId: users[Math.floor(Math.random() * users.length)].id,
        productId: products[Math.floor(Math.random() * products.length)].id,
      },
    });
    for (let k = 0; k < 3; k++) {
      await prisma.answer.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: users[Math.floor(Math.random() * users.length)].id,
          questionId: question.id,
        },
      });
    }
  }

  for (let j = 0; j < 1250; j++) {
    await prisma.review.create({
      data: {
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        rating: Math.floor(Math.random() * 5) + 1,
        authorId: users[Math.floor(Math.random() * users.length)].id,
        productId: products[Math.floor(Math.random() * products.length)].id,
      },
    });
  }
  console.log("quesitons, answers, reviews created ");

  console.log("Mock data generated successfully");
}
// createMockData()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// GPT-3
async function generateMockData() {
  const sellers = await prisma.user.findMany();

  for (let i = 0; i < 10; i++) {
    const product = await prisma.product.create({
      data: {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        type: faker.commerce.department(),
        sellerId: sellers[Math.floor(Math.random() * sellers.length)].id,
      },
    });

    for (let j = 0; j < 2; j++) {
      await prisma.prodUrl.create({
        data: {
          title: faker.lorem.words(),
          description: faker.lorem.sentence(),
          url: faker.image.imageUrl(),
          productId: product.id,
        },
      });
    }

    for (let j = 0; j < 2; j++) {
      await prisma.previewUrl.create({
        data: {
          title: faker.lorem.words(),
          description: faker.lorem.sentence(),
          url: faker.image.imageUrl(),
          productId: product.id,
        },
      });
    }

    for (let j = 0; j < 2; j++) {
      await prisma.question.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: sellers[Math.floor(Math.random() * sellers.length)].id,
          productId: product.id,
        },
      });
    }

    for (let j = 0; j < 2; j++) {
      const question = await prisma.question.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: sellers[Math.floor(Math.random() * sellers.length)].id,
          productId: product.id,
        },
      });

      await prisma.answer.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: sellers[Math.floor(Math.random() * sellers.length)].id,
          questionId: question.id,
        },
      });
    }

    for (let j = 0; j < 2; j++) {
      await prisma.review.create({
        data: {
          title: faker.lorem.words(),
          content: faker.lorem.paragraph(),
          rating: Math.floor(Math.random() * 5) + 1,
          authorId: sellers[Math.floor(Math.random() * sellers.length)].id,
          productId: product.id,
        },
      });
    }
  }
}

// generateMockData()
//   .then(() => console.log("Mock data generated successfully!"))
//   .catch((error) => console.error(error))
//   .finally(() => prisma.$disconnect());

async function createMockProducts() {
  // Number of products you want to create
  const numProducts = 40;

  // Add a sellerId that you want to use for the mock products
  const sellerId = "clfz7u5jn0000lq4mwfz30vjz";

  // Create an array of mock products
  const products = Array.from({ length: numProducts }, () => {
    return {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.datatype.number({ min: 1000, max: 100000 }),
      type: faker.commerce.department(),
      sellerId,
    };
  });

  // Insert the mock products into the database
  try {
    await prisma.$transaction(
      products.map((product) => prisma.product.create({ data: product }))
    );
    console.log(`Successfully inserted ${numProducts} products.`);
  } catch (error) {
    console.error("Error inserting products:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// createMockProducts();

// delete all datas
async function deleteAll() {
  await prisma.$transaction([
    prisma.account.deleteMany({}),
    prisma.answer.deleteMany({}),
    prisma.conversation.deleteMany({}),
    prisma.favorite.deleteMany({}),
    prisma.message.deleteMany({}),
    prisma.previewUrl.deleteMany({}),
    prisma.prodUrl.deleteMany({}),
    prisma.product.deleteMany({}),
    prisma.purchase.deleteMany({}),
    prisma.question.deleteMany({}),
    prisma.review.deleteMany({}),
    prisma.session.deleteMany({}),
    prisma.userInfo.deleteMany({}),
    prisma.user.deleteMany({}),
    prisma.verificationToken.deleteMany({}),
  ]);

  console.log("All data cleared from the database.");
}

// deleteAll()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
