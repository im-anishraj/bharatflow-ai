import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/blog/")({
  head: () => ({
    meta: createMetaTags({
      title: "BharatFlow AI Notes",
      description:
        "BharatFlow AI founder notes are being rewritten for the public open-development prototype.",
      imagePath: "/images/default-og.png",
      path: "/blog",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper className="max-w-3xl">
      <div className="flex flex-col gap-6">
        <h1>Founder notes are being rebuilt for BharatFlow AI</h1>
        <p className="text-xl">
          The previous public content library has been hidden from navigation
          while BharatFlow AI is repositioned for India-focused enterprise
          workflows. New notes will focus on product decisions, contributor
          context, and practical workflow patterns.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
