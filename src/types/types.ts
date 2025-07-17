// Clerk user type (simplified, expand as needed)
export interface ClerkUser {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  emailAddresses?: { emailAddress: string }[];
  imageUrl?: string;
}

// Prisma Post model with attached Clerk user
export type PostWithUser = {
  user: ClerkUser | null;
  createdAt: Date;
  id: string;
  title: string;
  content: string;
  userId: string;
};