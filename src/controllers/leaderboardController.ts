import prisma from "../db/prisma";

// ----- Survival Mode -----
export const addOrUpdateSurvivalScore = async (playerEmail: string, points: number, wave: number, time: number) => {
  return prisma.survivalLeaderboard.upsert({
    where: { playerEmail },
    update: {
      // Only update if the new score is higher
      points: points,  
      wave: wave,
      time: time
    },
    create: { playerEmail, points, wave, time },
  });
};

export const getTopSurvival = async (limit: number = 10) => {
  const results = await prisma.survivalLeaderboard.findMany({
    orderBy: { points: "desc" },
    take: limit,
    include: {
      player: {
        select: {
          username: true
        }
      }
    }
  });
  
  // Transform to include username at top level for frontend compatibility
  return results.map(entry => ({
    id: entry.id,
    username: entry.player?.username ?? entry.playerEmail,
    points: entry.points,
    wave: entry.wave,
    time: entry.time,
    createdAt: entry.createdAt
  }));
};

// ----- Flight Mode -----
export const addOrUpdateFlightScore = async (playerEmail: string, time: number) => {
  return prisma.flightLeaderboard.upsert({
    where: { playerEmail },
    update: {
      // Only update if the new time is better (lower)
      time: time
    },
    create: { playerEmail, time },
  });
};

export const getTopFlight = async (limit: number = 10) => {
  const results = await prisma.flightLeaderboard.findMany({
    orderBy: { time: "asc" },
    take: limit,
    include: {
      player: {
        select: {
          username: true
        }
      }
    }
  });
  
  // Transform to include username at top level for frontend compatibility
  return results.map(entry => ({
    id: entry.id,
    username: entry.player?.username ?? entry.playerEmail,
    time: entry.time,
    createdAt: entry.createdAt
  }));
};
