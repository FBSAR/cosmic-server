import prisma from "../db/prisma";

// ----- Survival Mode -----
export const addOrUpdateSurvivalScore = async (username: string, points: number, wave: number, time: number) => {
  return prisma.survivalLeaderboard.upsert({
    where: { username },
    update: {
      // Only update if the new score is higher
      points: points,  
      wave: wave,
      time: time
    },
    create: { username, points, wave, time },
  });
};

export const getTopSurvival = async (limit: number = 10) => {
  return prisma.survivalLeaderboard.findMany({
    orderBy: { points: "desc" },
    take: limit,
  });
};

// ----- Flight Mode -----
export const addOrUpdateFlightScore = async (username: string, time: number) => {
  return prisma.flightLeaderboard.upsert({
    where: { username },
    update: {
      // Only update if the new time is better (lower)
      time: time
    },
    create: { username, time },
  });
};

export const getTopFlight = async (limit: number = 10) => {
  return prisma.flightLeaderboard.findMany({
    orderBy: { time: "asc" },
    take: limit,
  });
};
