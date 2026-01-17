import prisma from "../db/prisma";

// Pagination response type
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

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

export const getTopSurvival = async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<any>> => {
  try {
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await prisma.survivalLeaderboard.count();
    
    const results = await prisma.survivalLeaderboard.findMany({
      orderBy: { points: "desc" },
      skip,
      take: limit,
      include: {
        player: {
          select: {
            username: true
          }
        }
      }
    });
    
    const totalPages = Math.ceil(total / limit);
    
    // Transform to include username at top level for frontend compatibility
    const data = results.map((entry, index) => ({
      id: entry.id,
      rank: skip + index + 1,
      username: entry.player?.username ?? entry.playerEmail ?? 'Unknown',
      points: entry.points,
      wave: entry.wave,
      time: entry.time,
      createdAt: entry.createdAt
    }));
    
    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error('Error in getTopSurvival:', error);
    throw error;
  }
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

export const getTopFlight = async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<any>> => {
  try {
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await prisma.flightLeaderboard.count();
    
    const results = await prisma.flightLeaderboard.findMany({
      orderBy: { time: "asc" },
      skip,
      take: limit,
      include: {
        player: {
          select: {
            username: true
          }
        }
      }
    });
    
    const totalPages = Math.ceil(total / limit);
    
    // Transform to include username at top level for frontend compatibility
    const data = results.map((entry, index) => ({
      id: entry.id,
      rank: skip + index + 1,
      username: entry.player?.username ?? entry.playerEmail ?? 'Unknown',
      time: entry.time,
      createdAt: entry.createdAt
    }));
    
    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error('Error in getTopFlight:', error);
    throw error;
  }
};
