import prisma from "../db/prisma";

// Login
export const sixDigitCodeLogin = async (email: string) => {
  try {
    // 🔍 1. Check if email exists in Player table
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (existingPlayer) {
      // ✅ Player exists
      return {
        exists: true,
        message: `Player with email ${email} found.`,
      };
    }

    // ❌ No existing player — generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    return {
      exists: false,
      code,
      message: "No existing player found. 6-digit code generated.",
    };
  } catch (error) {
    console.error("Error in sixDigitCodeLogin:", error);
    throw new Error("Failed to process login.");
  }
};
export const login = async (email: string) => {
    console.log(`Login successful from email: ${email}` );
    return { message: `Login successful from email: ${email}` };
//   return prisma.survivalLeaderboard.findMany({
//     orderBy: { points: "desc" },
//     take: limit,
//   });
};

// Sign Up
export const sixDigitCodeSignUp = async (email: string, username: string) => {
  try {
    // 1️⃣ Check for existing user by email or username
    const existingPlayer = await prisma.player.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ],
      },
    });

    if (existingPlayer) {
      return {
        exists: true,
        message: "A player with that email or username already exists.",
      };
    }

    // 2️⃣ Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 3️⃣ (Optional) Save code somewhere — e.g. VerificationCode table
    // await prisma.verificationCode.create({ data: { email, code } });

    return {
      exists: false,
      code,
      message: "No existing player found. 6-digit code generated.",
    };
  } catch (err) {
    console.error("Error in sixDigitCodeSignUp:", err);
    throw new Error("Failed to generate code or check player existence.");
  }
};
export const signUp = async (email: string, username: string) => {
    // console.log(`Sign Up successful from email: ${email}, by Username: ${username}` );
    // return { message: `Sign Up successful from email: ${email}, by Username: ${username}` };
  return prisma.survivalLeaderboard.findMany({
    orderBy: { points: "desc" },
  });
};
