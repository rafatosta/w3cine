/*
  Warnings:

  - You are about to drop the column `banner_url` on the `movies` table. All the data in the column will be lost.
  - Added the required column `file` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "file" TEXT NOT NULL
);
INSERT INTO "new_movies" ("classification", "duration", "genre", "id", "synopsis", "title") SELECT "classification", "duration", "genre", "id", "synopsis", "title" FROM "movies";
DROP TABLE "movies";
ALTER TABLE "new_movies" RENAME TO "movies";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
