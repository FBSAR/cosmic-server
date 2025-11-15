import prisma from "../db/prisma";
import nodemailer from "nodemailer";
import 'dotenv/config'; // or import dotenv from 'dotenv'; 
// dotenv.config();

/**
 * Generates an alphanumeric code of the specified length.
 * The code uses uppercase, lowercase letters, and digits (0-9).
 * @param length The desired length of the code (e.g., 6 for a six-digit session ID).
 * @returns A randomly generated alphanumeric string.
 */
export const sixDigitSessionId = (length: number): string => {
  // Define the characters allowed in the session ID.
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    // Select a random character from the available pool
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
};