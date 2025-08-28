/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `SurvivalLeaderboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SurvivalLeaderboard_username_key" ON "public"."SurvivalLeaderboard"("username");
