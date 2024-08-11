# Set Up

## Clerk

Create a .env.local file for Clerk and paste your own credentials.

## Prisma

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

## Docker

Run docker compose up to create you container and run it.
Note: You need docker desktop running.

## Git Workflow

1. Create a branch for your specific task. 
    - `git checkout -b <branch_name>`
    - `git push -u origin <branch_name>`
2. Make sure you are working on the latest version of the main branch by pulling often.
3. Write your commits in the following format when applicable: `git commit <file> -m "<name or handle>: Created X component with Y functionality to be integrated with Z component"`
4. For these independent tasks, we will be rebasing onto the main branch. These will be reviewed by at least one other person.