import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/oss-friends")({
  head: () => ({
    meta: createMetaTags({
      title: "Partner Ecosystem | BharatFlow AI",
      description:
        "BharatFlow AI's partner ecosystem is being curated for the private prototype.",
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
          BharatFlow AI is currently a private prototype. We are curating a
          small ecosystem of implementation, compliance, and integration
          partners before any public launch.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
