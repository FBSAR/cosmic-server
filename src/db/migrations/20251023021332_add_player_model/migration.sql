-- CreateTable
CREATE TABLE "public"."Player" (
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_username_key" ON "public"."Player"("username");
