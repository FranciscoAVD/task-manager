# Set Up

## Clerk

Create a .env.local file for Clerk and paste your own credentials.

## Prisma

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

## Docker

Run docker compose up to create you container run it.
Note: You need docker desktop running.