import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const createCategoriesAndProducts = async () => {
  const burguersCategory = await prismaClient.category.create({
    data: {
      name: "Burguers",
    },
  });

  const pizzasCategory = await prismaClient.category.create({
    data: {
      name: "Pizzas",
    },
  });

  const burguerProducts = [
    {
      name: "Cheese Burguer",
      price: 30,
      description: "A delicious cheese burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/ae177fa1-129c-4f43-9928-aa8ac1080a18-yqapzx.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Double Cheese Burguer",
      price: 40,
      description: "A delicious double cheese burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/dca007fe-0025-422e-9328-16d40f0a1792-yqapzy.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Bacon Burguer",
      price: 35,
      description: "A delicious bacon burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/4cb1ca21-0748-4296-a23d-88e52687506a-yqapzz.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Double Bacon Burguer",
      price: 45,
      description: "A delicious double bacon burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/ed9fde1e-0675-4829-8001-a775e2825dc6-yqaq00.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Chicken Burguer",
      price: 30,
      description: "A delicious chicken burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/0aff860a-3e05-42fd-9b2a-53d03c744949-yqaq01.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Double Chicken Burguer",
      price: 40,
      description: "A delicious double chicken burguer",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/d2157790-fcb7-4d09-b074-80af4bfb9892-yqaq02.png",
      category: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
  ];

  const pizzaProducts = [
    {
      name: "Margherita Pizza",
      price: 50,
      description: "A classic margherita pizza",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/f47722b0-cc3d-4b4e-8bb1-105255c0ed20-yqapzz.png",
      category: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Pepperoni Pizza",
      price: 60,
      description: "A delicious pepperoni pizza",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/6e23cdb4-0e8c-4d8a-a94c-503f3a2db13e-yqaq03.png",
      category: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "BBQ Chicken Pizza",
      price: 65,
      description: "A tasty BBQ chicken pizza",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/6bdb52b7-fdcc-4c3d-bbeb-8e4c14a53120-yqaq04.png",
      category: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Veggie Pizza",
      price: 55,
      description: "A healthy veggie pizza",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/1e1d8e26-09d4-4bde-9732-42b6ed9df62d-yqaq05.png",
      category: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Hawaiian Pizza",
      price: 60,
      description: "A delicious Hawaiian pizza with pineapple and ham",
      discountPercentage: 0,
      imageUrl: "https://utfs.io/f/99473a29-cf4e-4b69-b28f-3c9b198a0a56-yqaq06.png",
      category: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
  ];

  for (const product of burguerProducts) {
    await prismaClient.product.create({
      data: product,
    });
    console.log(`Created ${product.name}`);
  }

  for (const product of pizzaProducts) {
    await prismaClient.product.create({
      data: product,
    });
    console.log(`Created ${product.name}`);
  }
};

createCategoriesAndProducts()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prismaClient.$disconnect();
  });
