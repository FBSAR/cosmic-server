/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `FlightLeaderboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FlightLeaderboard_username_key" ON "public"."FlightLeaderboard"("username");
