import { registerUrl } from "@/constants";
import { CtaButtonLink } from "../link";
import imgSrc from "./assets/3d-group.png";

export const WhyTypebotCta = () => (
  <div className="why-cta overflow-hidden relative isolate dark flex justify-between items-center p-4 rounded-3xl w-full">
    <div className="flex flex-col gap-6 flex-1 p-4 md:py-0 md:pl-16 md:pr-20 items-start">
      <h2>Why BharatFlow AI?</h2>
      <p>
        Most tools either give teams a rigid inbox or an open-ended AI assistant
        that is hard to govern. BharatFlow AI keeps the journey visual:
        questions, variables, files, consent, AI steps, handoffs, and
        integrations are all reviewable before launch.
      </p>
      <CtaButtonLink size="lg" href={registerUrl}>
        Build a workflow
      </CtaButtonLink>
    </div>
    <img
      src={imgSrc}
      alt="Illustration of workflow building blocks in 3d"
      className="rounded-3xl max-w-md hidden md:block"
    />
  </div>
);
