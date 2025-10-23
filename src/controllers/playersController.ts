import prisma from "../db/prisma";

// Players
export const getAllPlayers = async () => {
  return prisma.player.findMany({
    orderBy: { createdAt: "desc" }
  });
}
