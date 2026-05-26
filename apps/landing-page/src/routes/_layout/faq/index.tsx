import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/faq/")({
  head: () => ({
    meta: createMetaTags({
      title: "FAQ | BharatFlow AI",
      description:
        "BharatFlow AI FAQ content is paused while the private prototype is repositioned.",
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
        <h1>FAQ content is paused for the private prototype</h1>
        <p className="text-xl">
          Public FAQ pages will be rewritten after legal, security, and product
          positioning review. Use the homepage FAQ and internal docs for the
          current prototype.
        </p>
      </div>
    </ContentPageWrapper>
  );
}
