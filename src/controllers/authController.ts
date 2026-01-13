import prisma from "../db/prisma";
import nodemailer from "nodemailer";
import 'dotenv/config';

// Create Nodemailer transporter for Spacemail (Privateemail)
const transporter = nodemailer.createTransport({
  host: 'mail.spacemail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.VERCEL_EMAIL_USER,
    pass: process.env.VERCEL_EMAIL_PASS,
  },
});

// Helper function to send email using Nodemailer
const sendEmail = async (mailOptions: nodemailer.SendMailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email with Nodemailer:", error);
    throw error;
  }
};

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
    const mailOptions = {
      from: "eddie@finalbossxr.com", // Must be verified in SendGrid
      to: email,
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
    await sendEmail(mailOptions);

    // Send additional success notification
    const successMailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Login Code Sent",
      text: `We have sent you a 6-digit login code to your email.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Login Code Sent</h2>
          <p>We have sent you a 6-digit login code to your email.</p>
          <p>Please check your inbox and enter the code to log in.</p>
        </div>
      `,
    };

    // Send email asynchronously
    setImmediate(async () => {
      try {
        await sendEmail(successMailOptions);
        console.log("Login code notification sent to:", email);
      } catch (err) {
        console.error("Error sending login code notification:", err);
      }
    });

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

    // 3️⃣ Send email with SendGrid
    const mailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
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
    await sendEmail(mailOptions);

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

    // Send success email
    const successMailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Welcome to Cosmic Collisions!",
      text: `Welcome ${username}! Your account has been created successfully.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Welcome to Cosmic Collisions!</h2>
          <p>Hi ${username},</p>
          <p>Your account has been created successfully.</p>
          <p>Enjoy the game!</p>
        </div>
      `,
    };

    // Send email asynchronously without blocking
    setImmediate(async () => {
      try {
        await sendEmail(successMailOptions);
        console.log("Welcome email sent to:", email);
      } catch (err) {
        console.error("Error sending welcome email:", err);
      }
    });

    return {
      message: "Sign up successful",
      player: newPlayer,
    };
  } catch (error) {
    console.error("Error creating player:", error);
    throw new Error("Failed to create player");
  }
};

// Settings Page Functions

export const updateEmail = async (email: string, newEmail: string) => {
  try {
    const updatedPlayer = await prisma.player.update({
      where: { email },
      data: { email: newEmail },
    });

    // Send success email to new email
    const successMailOptions = {
      from: "eddie@finalbossxr.com",
      to: newEmail,
      subject: "Email Updated Successfully",
      text: `Your email has been updated successfully.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Email Updated</h2>
          <p>Your email has been updated successfully.</p>
          <p>If you did not make this change, please contact support.</p>
        </div>
      `,
    };

    // Send email asynchronously
    setImmediate(async () => {
      try {
        await sendEmail(successMailOptions);
        console.log("Email update confirmation sent to:", newEmail);
      } catch (err) {
        console.error("Error sending email update confirmation:", err);
      }
    });

    return {
      message: "Email updated successfully",
      player: updatedPlayer,
    };
  } catch (error) {
    console.error("Error updating email:", error);
    throw new Error("Failed to update email");
  }
};

export const sixDigitCodeUpdateEmail = async (currentEmail: string, newEmail: string) => {
  try {
    // Validate inputs
    if (!currentEmail || !newEmail) {
      return {
        message: "Current email and new email are required.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(currentEmail) || !emailRegex.test(newEmail)) {
      return {
        message: "Invalid email format.",
      };
    }

    // 1️⃣ Check if the player exists with current email
    const existingPlayer = await prisma.player.findUnique({
      where: { email: currentEmail },
    });

    if (!existingPlayer) {
      return {
        exists: false,
        message: "No player found with this email.",
      };
    }

    // 2️⃣ Check if new email is already taken
    const emailTaken = await prisma.player.findUnique({
      where: { email: newEmail },
    });

    if (emailTaken) {
      return {
        exists: true,
        message: "A player with that email already exists.",
      };
    }

    // 3️⃣ Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 4️⃣ Send email with SendGrid to new email
    const mailOptions = {
      from: "eddie@finalbossxr.com",
      to: newEmail,
      subject: "Your 6-Digit Email Update Code",
      text: `Your email update code is: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Email Update Verification</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #4ade80;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
    };

    console.log("Sending email update code:", mailOptions);
    
    try {
      await sendEmail(mailOptions);
    } catch (emailErr) {
      console.error("Error sending email:", emailErr);
      return {
        exists: true,
        success: false,
        message: "Failed to send verification email. Please check your email address and try again.",
      };
    }

    return {
      exists: true,
      success: true,
      code,
      message: "Verification code sent to new email.",
    };
  } catch (err) {
    console.error("Error in sixDigitCodeUpdateEmail:", err);
    return {
      exists: false,
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
};

export const updateUsername = async (email: string, newUsername: string) => {
  try {
    // Check if player exists
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      return {
        message: "Player not found with this email.",
      };
    }

    const updatedPlayer = await prisma.player.update({
      where: { email },
      data: { username: newUsername },
    });

    // Send success email
    const successMailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Username Updated Successfully",
      text: `Your username has been updated to ${newUsername} successfully.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Username Updated</h2>
          <p>Your username has been updated to <strong>${newUsername}</strong> successfully.</p>
          <p>If you did not make this change, please contact support.</p>
        </div>
      `,
    };

    // Send email asynchronously
    setImmediate(async () => {
      try {
        await sendEmail(successMailOptions);
        console.log("Username update confirmation sent to:", email);
      } catch (err) {
        console.error("Error sending username update confirmation:", err);
      }
    });

    return {
      message: "Username updated successfully",
      player: updatedPlayer,
    };
  } catch (error) {
    console.error("Error updating username:", error);
    throw new Error("Failed to update username");
  }
};

export const sixDigitCodeUpdateUsername = async (email: string, newUsername: string) => {
  try {
    // Validate inputs
    if (!email || !newUsername) {
      return {
        message: "Email and new username are required.",
      };
    }

    // 1️⃣ Check if the player exists with email
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      return {
        exists: false,
        message: "No player found with this email.",
      };
    }

    // 2️⃣ Check if new username is already taken
    const usernameTaken = await prisma.player.findUnique({
      where: { username: newUsername },
    });

    if (usernameTaken) {
      return {
        exists: true,
        message: "A player with that username already exists.",
      };
    }

    // 3️⃣ Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 4️⃣ Send email with SendGrid to current email
    const mailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Your 6-Digit Username Update Code",
      text: `Your username update code is: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Username Update Verification</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #4ade80;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
    };

    console.log("Sending username update code:", mailOptions);
    await sendEmail(mailOptions);

    return {
      exists: true,
      code,
      message: "Verification code sent to email.",
    };
  } catch (err) {
    console.error("Error in sixDigitCodeUpdateUsername:", err);
    throw new Error("Failed to send verification email.");
  }
};

export const deleteProfile = async (email: string) => {
  try {
    // Check if player exists
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      return {
        message: "Player not found with this email.",
      };
    }

    // Delete the player
    await prisma.player.delete({
      where: { email },
    });

    // Send success email (before deletion, but since email is key, send now)
    const successMailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Profile Deleted Successfully",
      text: `Your profile has been deleted successfully.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Profile Deleted</h2>
          <p>Your profile has been deleted successfully.</p>
          <p>If you did not request this deletion, please contact support immediately.</p>
        </div>
      `,
    };

    // Send email asynchronously
    setImmediate(async () => {
      try {
        await sendEmail(successMailOptions);
        console.log("Profile deletion confirmation sent to:", email);
      } catch (err) {
        console.error("Error sending profile deletion confirmation:", err);
      }
    });

    return {
      message: "Profile deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting profile:", error);
    throw new Error("Failed to delete profile");
  }
};

export const sixDigitCodeDeleteProfile = async (email: string) => {
  try {
    // Validate input
    if (!email) {
      return {
        message: "Email is required.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        message: "Invalid email format.",
      };
    }

    // 1️⃣ Check if the player exists
    const existingPlayer = await prisma.player.findUnique({
      where: { email },
    });

    if (!existingPlayer) {
      return {
        exists: false,
        message: "No player found with this email.",
      };
    }

    // 2️⃣ Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 3️⃣ Send email with SendGrid
    const mailOptions = {
      from: "eddie@finalbossxr.com",
      to: email,
      subject: "Your 6-Digit Profile Deletion Code",
      text: `Your profile deletion code is: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Profile Deletion Verification</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #dc2626;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
          <p><strong>Warning: This action cannot be undone.</strong></p>
        </div>
      `,
    };

    console.log("Sending profile deletion code:", mailOptions);
    await sendEmail(mailOptions);

    return {
      exists: true,
      code,
      message: "Verification code sent to email.",
    };
  } catch (err) {
    console.error("Error in sixDigitCodeDeleteProfile:", err);
    throw new Error("Failed to send verification email.");
  }
};


