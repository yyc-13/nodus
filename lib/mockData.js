// insert mock data: node lib/seed.js
const { PrismaClient } = require("@prisma/client");

const { faker } = require("@faker-js/faker");

function createRandomProduct(sellerId) {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number({ min: 1000, max: 100000 }),
    type: faker.commerce.department(),
    sellerId,
  };
}

async function seed() {
  const prisma = new PrismaClient();

  // Number of products you want to create
  const numProducts = 40;

  // Add a sellerId that you want to use for the mock products
  const sellerId = "clfz7u5jn0000lq4mwfz30vjz";

  // Create an array of mock products
  const products = Array.from({ length: numProducts }, () =>
    createRandomProduct(sellerId)
  );

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

seed();
