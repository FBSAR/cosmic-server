import prisma from "../db/prisma";

// Players
export const getAllPlayers = async () => {
  return prisma.player.findMany({
    orderBy: { createdAt: "desc" }
  });
}

export const deletePlayer = async (email: string) => {
  try {
    // Check if player exists first
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      return { message: "Player not found" };
    }

    // Delete player
    await prisma.player.delete({
      where: { email },
    });

    return { message: "Player deleted successfully" };
  } catch (error) {
    console.error("Error deleting player:", error);
    throw new Error("Failed to delete player");
  }
};
