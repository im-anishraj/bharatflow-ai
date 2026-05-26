import type { ReactNode } from "react";
import { TypebotLogo } from "@/components/TypebotLogo";

type TestimonialData = {
  name: string;
  role: string;
  content: ReactNode;
  avatarSrc?: string;
};

const testimonials = [
  {
    name: "Revenue Ops Lead",
    role: "Real estate group",
    content: (
      <>
        Our highest-intent enquiries already arrive on WhatsApp. BharatFlow AI
        gives us a way to qualify buyers, capture site-visit preferences, and
        send clean context to the sales team before anyone picks up the phone.
        <br />
        <br />
        That is the difference between a chat widget and an actual revenue
        workflow.
      </>
    ),
  },
  {
    name: "Head of CX",
    role: "Healthcare network",
    content: (
      <>
        The visual builder is useful because our support and operations teams
        can review the journey together. Routine questions stay automated, but
        document requests and sensitive cases still go to a human with context.
      </>
    ),
  },
  {
    name: "Founder",
    role: "Education services startup",
    content: (
      <>
        Admissions teams do not need another spreadsheet. They need a fast way
        to understand student intent, city, budget, course fit, and follow-up
        consent. This is exactly the kind of workflow we can launch quickly.
      </>
    ),
  },
  {
    name: "IT Manager",
    role: "Manufacturing enterprise",
    content: (
      <>
        The platform feels practical for enterprise pilots because it keeps
        integrations, credentials, workflows, and deployment options explicit.
        <br />
        We can start with dealer enquiries and internal service requests before
        expanding to customer support.
      </>
    ),
  },
] satisfies TestimonialData[];

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl items-center w-full">
      <div className="flex flex-col gap-4 md:text-center">
        <h2>Built for the teams carrying growth</h2>
        <p>
          Prototype positioning for Indian revenue, CX, and operations leaders.
        </p>
      </div>
      <div className="flex flex-col rounded-2xl overflow-y-auto max-h-[50vh] md:max-h-[70vh] bg-white border relative isolate w-full">
        <div
          className="pointer-events-none top-0 h-10 w-full bg-linear-to-t from-background/10 to-background/90 sticky shrink-0 animate-in fade-in"
          style={{
            animationTimeline: "scroll()",
            animationRange: "0% 10%",
          }}
        />
        <div className="flex flex-col gap-6 items-center px-4">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div
          className="pointer-events-none bottom-0 h-10 w-full bg-linear-to-b from-background/10 to-background/90 sticky shrink-0 animate-out fade-out"
          style={{
            animationTimeline: "scroll()",
            animationRange: "90% 100%",
          }}
        />
      </div>
    </div>
  );
};

const Testimonial = ({ name, content, role, avatarSrc }: TestimonialData) => {
  return (
    <div className="flex gap-2 max-w-lg">
      <div className="rounded-full size-10 shrink-0">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="object-cover rounded-full"
          />
        ) : (
          <div className="dark rounded-full size-full flex items-center justify-center p-3">
            <TypebotLogo />
          </div>
        )}
      </div>
      <div className="flex flex-col bg-secondary text-secondary-foreground border p-4 rounded-xl gap-4 rounded-tl-md">
        <p>{content}</p>
        <hr />
        <span className="text-sm">
          {name} - {role}
        </span>
      </div>
    </div>
  );
};
