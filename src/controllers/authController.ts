import prisma from "../db/prisma";
import nodemailer from "nodemailer";
import 'dotenv/config'; // or import dotenv from 'dotenv'; 
// dotenv.config();

// Login
export const sixDigitCodeLogin = async (email: string) => {
  try {
    // 1️⃣ Check if the player exists
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      console.log(`No player found with email: ${email}`);
      return {
        exists: false,
        message: "No player found with this email.",
      };
    }

    // 2️⃣ Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 3️⃣ Send the code via email
    const transporter = nodemailer.createTransport({
      host: "mail.spacemail.com",
      port: 465,
      secure: true,
      auth: {
        // user: "eddie@finalbossxr.com",
        // pass: "bossfinaL7$",
        user: process.env.VERCEL_EMAIL_USER,
        pass: process.env.VERCEL_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"Cosmic Collisions" <eddie@finalbossxr.com>',
      to: email,
      envelope: {
        from: 'eddie@finalbossxr.com',
        to: email,
      },
      subject: "Your 6-Digit Login Code",
      text: `Your login code is: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Welcome back!</h2>
          <p>Your login code is:</p>
          <h1 style="color: #4ade80;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
    };

    console.log("Sending login email:", mailOptions);
    await transporter.sendMail(mailOptions);

    return {
      exists: true,
      code: code,
      message: "6-digit login code sent to email.",
    };
  } catch (err: any) {
    console.error("Error in sixDigitCodeLogin:", err);
    throw new Error(`Failed to send login code: ${err.message}`);
  }
};

// Sign Up
export const sixDigitCodeSignUp = async (email: string, username: string) => {
  try {
    // 1️⃣ Check for existing user
    const existingPlayer = await prisma.player.findFirst({
      where: {
        OR: [{ email }, { username }],
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

    // 3️⃣ Send email with Nodemailer
    const transporter = nodemailer.createTransport({
      host: "mail.spacemail.com", // check your Spacemail control panel for this
      port: 465, // use 465 for SSL or 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: "eddie@finalbossxr.com",
        pass: "bossfinaL7$", // consider using process.env vars instead!
      },
    });

    const mailOptions = {
      from: '"Cosmic Collisions" <eddie@finalbossxr.com>',
      to: email,
      envelope: {
        from: 'eddie@finalbossxr.com', // MUST match your auth.user
        to: email
  },
      subject: "Your 6-Digit Verification Code",
      text: `Your verification code is: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Welcome to Cosmic Collisions!</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #4ade80;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
    };

    console.log("Sending email with options:", mailOptions);
    await transporter.sendMail(mailOptions);

    return {
      exists: false,
      code,
      message: "Verification code sent to email.",
    };
  } catch (err) {
    console.error("Error in sixDigitCodeSignUp:", err);
    throw new Error("Failed to send verification email.");
  }
};
export const signUp = async (username: string, email: string) => {
  try {
    // Check if player already exists by email or username
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (existingPlayer) {
      return { message: "Player already exists", player: existingPlayer };
    }

    // Create a new player
    const newPlayer = await prisma.player.create({
      data: {
        username,
        email,
      },
    });

    console.log("New player created:", newPlayer);
    return {
      message: "Sign up successful",
      player: newPlayer,
    };
  } catch (error) {
    console.error("Error creating player:", error);
    throw new Error("Failed to create player");
  }
};
