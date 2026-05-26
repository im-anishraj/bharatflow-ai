import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { WhyTypebotCta } from "@/components/cta/WhyTypebotCta";
import { TextLink } from "@/components/link";
import {
  founderEmailUrl,
  founderGithubUrl,
  founderLinkedInUrl,
} from "@/constants";
import { MessageSquareGradientIcon } from "@/features/about/MessageSquareGradientIcon";
import { ZapGradientIcon } from "@/features/about/ZapGradientIcon";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/about")({
  head: () => ({
    meta: createMetaTags({
      title: "About | BharatFlow AI",
      description:
        "BharatFlow AI helps Indian businesses automate governed customer workflows across WhatsApp, web, and APIs.",
      imagePath: "/images/default-og.png",
      path: "/about",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper>
      <div className="max-w-3xl mx-auto gap-16 flex flex-col">
        <h1>India needs workflow automation where customers already talk</h1>
        <div className="flex flex-col gap-10 font-display text-3xl md:text-justify">
          <p>
            BharatFlow AI starts from a simple belief:{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-30%">
              <MessageSquareGradientIcon className="size-6 inline-flex group-hover:motion-preset-seesaw-lg" />{" "}
              customer conversations
            </span>{" "}
            should become measurable business workflows.
          </p>
          <p>
            Indian companies already receive demand through WhatsApp, websites,
            ads, call centers, and field teams. The problem is that the journey
            after the first message is often manual, fragmented, and hard to
            measure.
          </p>
          <p>
            We are building a private prototype for{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-50%">
              <ZapGradientIcon className="size-6 inline-flex group-hover:motion-preset-oscillate-lg" />{" "}
              governed AI workflows
            </span>{" "}
            that qualify leads, collect documents, route support, book
            appointments, capture consent, and sync clean data into the systems
            teams already use.
          </p>
          <p>
            The product keeps automation visual and reviewable so revenue,
            support, operations, and IT can collaborate before a workflow goes
            live.
          </p>
          <p className="font-bold">
            The current build is internal only until the legal and commercial
            path is cleared.
          </p>
          <p>
            Built by Anish Raj:{" "}
            <TextLink href={founderGithubUrl} target="_blank" hideExternalIcon>
              GitHub
            </TextLink>
            {", "}
            <TextLink
              href={founderLinkedInUrl}
              target="_blank"
              hideExternalIcon
            >
              LinkedIn
            </TextLink>
            {", "}
            <TextLink href={founderEmailUrl}>email</TextLink>.
          </p>
          <p>Build workflows. Keep control.</p>
        </div>
      </div>
      <WhyTypebotCta />
    </ContentPageWrapper>
  );
}
