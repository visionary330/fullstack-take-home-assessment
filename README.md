# 🏛️ Social Department - Take Home Assessment

A full-stack, type-safe Next.js 15.4.1 application built using the modern **T3 stack**. This app provides a clean and responsive platform for authenticated users to create, view, and manage posts within a community. Built with production-quality practices in mind.

---

## ✨ Features

- **🔐 User Authentication** — Seamless sign-in/sign-up experience powered by [Clerk](https://clerk.dev).
- **📰 Post Feed** — Attractive feed layout showing community posts with user metadata.
- **✍️ Create Post** — Form-based UI to add new posts, using server actions and Zod validation.
- **🗑️ Delete Post** — Authenticated users can delete their own posts.
- **📱 Responsive Design** — Tailored for all device sizes with TailwindCSS and `shadcn/ui`.
- **🔒 Type-Safe Backend** — `next-safe-action` ensures secure and typesafe data mutations.
- **📦 Database Integration** — Backed by CockroachDB with Prisma ORM.
- **🧑‍💻 Developer Focused** — Fully typed with strict `tsconfig`, `eslint`, and no `any` usage.

---

## 🧰 Tech Stack

| Layer             | Technology                          |
|------------------|-------------------------------------|
| **Framework**     | [Next.js 15.4.1](https://nextjs.org) |
| **Auth**          | [Clerk](https://clerk.dev)          |
| **Styling**       | Tailwind CSS + `shadcn/ui`          |
| **ORM**           | [Prisma](https://www.prisma.io)     |
| **Database**      | [CockroachDB](https://www.cockroachlabs.com/) |
| **Validation**    | [Zod](https://zod.dev)              |
| **Server Actions**| `next-safe-action`                  |
| **Icons**         | [Lucide](https://lucide.dev)        |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/visionary330/fullstack-take-home-assessment.git
cd fullstack-take-home-assessment
```

### 2. Install Dependencies

```bach
npm install
```
### 3. Setup Environment Variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Update the values in .env:

```ini
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?sslmode=verify-full"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### 4. Prepare the Database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Dev Server

```bash
npm run dev
```
Visit http://localhost:3000 to view the app.

## 🐳 Docker Support

### Build the Docker Image
```bash
docker build -t fullstack-take-home-assessment \
  --build-arg DATABASE_URL=your-database-url \
  --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_... \
  --build-arg CLERK_SECRET_KEY=sk_test_... \
  .
```

### Run the Container

```bash
docker run -p 3000:3000 fullstack-take-home-assessment
```

## 📂 Project Structure

```bash
├── prisma/                        # Prisma DB schema and migrations
│   └── schema.prisma
├── public/                        # Public assets
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── _components/          # Reusable UI components
│   │   │   ├── DeleteButton.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── PostList.tsx
│   │   ├── create/
│   │   │   ├── layout.tsx        # Layout for the /create route
│   │   │   └── page.tsx          # Create post form page
│   │   ├── 404.tsx               # Custom 404 page
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage displaying posts
│   ├── components/               # Global components (if any)
│   ├── lib/                      # Utility functions
│   ├── server/                   # Server-side actions (e.g., database, actions)
│   ├── styles/                   # Tailwind/global CSS (if present)
│   └── types/                    # Type definitions

```

## 💡 Usage

- Sign In/Sign Up: Use Clerk UI to authenticate.
- View Posts: Browse all public posts on the homepage.
- Create Post: Navigate to /create to add a new post.
- Delete Post: If you're the author, a delete button appears on your post.

## 📦 .env Example

```bash
# Database
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>?sslmode=verify-full

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-key
CLERK_SECRET_KEY=sk_test_your-key
```

## 🔜 Next Steps

To take this project further, consider the following:
- CI/CD Integration — Automate build/test/deploy pipeline via GitHub Actions or Vercel CLI.
- Rate Limiting & Throttling — Protect your create/delete endpoints from abuse.
- Rich Text Editor — Add markdown or WYSIWYG support to post creation.
- Edit Post Feature — Allow users to update previously created posts.
- Comments System — Enable replies and nested threads for richer discussion.
- Post Likes/Reactions — Track engagement using optimistic UI.
- SEO Optimization — Add metadata, OG tags, and sitemaps for better discoverability.

## ✅ Requirements Checklist
- App Router structure
- Server Actions with `next-safe-action` and `zod`
- Clerk Authentication
- shadcn/ui components
- Tailwind CSS for styling
- Prisma + CockroachDB
- TypeScript and type safety
- No `any` type used
- `.env.example` and `README.md`

## 📜 License

[MIT License](./LICENSE)