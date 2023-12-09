import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc";

const endpoint =
  process.env.NODE_ENV === "production"
    ? (process.env.API_ENDPOINT as string)
    : "http://localhost:3000/api/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint,
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
