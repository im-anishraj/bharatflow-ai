import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/blog/")({
  head: () => ({
    meta: createMetaTags({
      title: "BharatFlow AI Notes",
      description:
        "BharatFlow AI content is paused while the private prototype is repositioned.",
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
        <h1>Founder notes are paused for the private prototype</h1>
        <p className="text-xl">
          The previous public content library has been hidden from navigation
          while BharatFlow AI is repositioned for India-focused enterprise
          workflows. New content should only be published after legal and brand
          review.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
