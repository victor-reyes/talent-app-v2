# Setting Up the Project

```sh
# Copy environment variables to .env
cp .env.local .env
```

```sh
# Start Docker containers
docker compose up -d
```

```sh
# Install dependencies
pnpm i

# Push database changes
pnpm drizzle-kit push

# Seed the database
pnpm seed

# Start the development server
pnpm dev
```
