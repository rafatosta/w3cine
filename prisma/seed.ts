import { PrismaClient } from "@prisma/client";
import { moviesList } from "./seed/movies";
const prisma = new PrismaClient();

async function run() {
  await prisma.movie.deleteMany();
  await prisma.session.deleteMany();
  await prisma.sessionTime.deleteMany();

  moviesList.map(async (movie) => {
    await prisma.movie.create({
      data: movie,
    });
  });

  
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
