/*
  Warnings:

  - You are about to drop the `Leaderboard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Leaderboard";

-- CreateTable
CREATE TABLE "public"."SurvivalLeaderboard" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "wave" INTEGER NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SurvivalLeaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FlightLeaderboard" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlightLeaderboard_pkey" PRIMARY KEY ("id")
);
