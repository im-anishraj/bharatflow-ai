import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/oss-friends")({
  head: () => ({
    meta: createMetaTags({
      title: "Partner Ecosystem | BharatFlow AI",
      description:
        "BharatFlow AI's partner ecosystem is being curated for implementation, compliance, and integration contributors.",
      imagePath: "/images/default-og.png",
      path: "/oss-friends",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper>
      <div className="flex flex-col gap-4">
        <h1>Partner Ecosystem</h1>
        <p className="text-foreground/70">
          BharatFlow AI is public for open development. We are curating an
          ecosystem of implementation, compliance, and integration contributors
          while commercial hosted availability remains subject to legal
          clearance.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
