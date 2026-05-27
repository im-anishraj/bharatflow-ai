export const breakpoints = {
  md: 768,
};

export const currentBaseUrl = "https://bharatflow.ai";
export const founderGithubUrl = "https://github.com/im-anishraj";
export const founderLinkedInUrl = "https://linkedin.com/in/im-anishraj";
export const founderEmailUrl = "mailto:anishraj.dev@gmail.com";
const pilotAccessEmailBody = encodeURIComponent(
  "Hi Anish,\n\nI would like to request pilot access to BharatFlow AI.\n\nCompany:\nRole:\nUse case:\nExpected WhatsApp/web volume:\nTimeline:\n\nThanks.",
);
const enterpriseDemoEmailBody = encodeURIComponent(
  "Hi Anish,\n\nI would like to discuss BharatFlow AI for our team.\n\nCompany:\nRole:\nPrimary workflow:\nTeam size:\nDeployment preference:\nTimeline:\n\nThanks.",
);
const contactEmailBody = encodeURIComponent(
  "Hi Anish,\n\nI have a question about BharatFlow AI.\n\nContext:\n\nThanks.",
);
export const contactUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20contact&body=${contactEmailBody}`;
export const registerUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20pilot%20access&body=${pilotAccessEmailBody}`;
export const launchPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Launch%20pilot&body=${pilotAccessEmailBody}`;
export const growthPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Growth%20pilot&body=${pilotAccessEmailBody}`;
export const businessPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Business%20pilot&body=${pilotAccessEmailBody}`;
export const templateRequestUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20template%20access&body=${pilotAccessEmailBody}`;
export const dashboardUrl = "/templates";
export const githubRepoUrl = "https://github.com/im-anishraj/bharatflow-ai";
export const blueskyUrl = "https://bsky.app/profile/bharatflow.ai";
export const linkedInUrl = founderLinkedInUrl;
export const discordUrl = contactUrl;
export const docsUrl = "/docs";
export const howToGetHelpUrl = `${docsUrl}#support`;
export const stripeClimateUrl = "https://climate.stripe.com/5VCRAq";
export const enterpriseLeadUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20enterprise%20demo&body=${enterpriseDemoEmailBody}`;

export const legacyRedirects = {
  "/typebot-lib": "https://unpkg.com/typebot-js@2.0.21/dist/index.umd.min.js",
  "/typebot-lib/v2": "https://unpkg.com/typebot-js@2.1.3/dist/index.umd.min.js",
} as const;
