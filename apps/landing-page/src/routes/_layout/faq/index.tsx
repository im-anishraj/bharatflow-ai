import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/faq/")({
  head: () => ({
    meta: createMetaTags({
      title: "FAQ | BharatFlow AI",
      description:
        "BharatFlow AI FAQ content is being rewritten for the public open-development prototype.",
      imagePath: "/images/default-og.png",
      path: "/faq",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper className="max-w-3xl">
      <div className="flex flex-col gap-6">
        <h1>FAQ content is being rewritten for the public prototype</h1>
        <p className="text-xl">
          The historical FAQ library is being replaced with BharatFlow-specific
          answers for contributors, evaluators, and India-focused workflow
          builders. Use the homepage FAQ and docs for the current prototype.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
