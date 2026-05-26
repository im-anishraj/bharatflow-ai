import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/faq/$slug")({
  loader: () => {
    throw redirect({
      to: "/faq",
    });
  },
});
