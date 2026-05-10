import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  basepath: "/moose-lotta-adventures",
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});