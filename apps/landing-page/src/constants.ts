export const breakpoints = {
  md: 768,
};

export const currentBaseUrl = "https://bharatflow.ai";
export const founderGithubUrl = "https://github.com/im-anishraj";
export const founderLinkedInUrl = "https://linkedin.com/in/im-anishraj";
export const founderEmailUrl = "mailto:anishraj.dev@gmail.com";
export const signinUrl = founderEmailUrl;
export const registerUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20private%20pilot`;
export const launchPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Launch%20pilot`;
export const growthPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Growth%20pilot`;
export const businessPilotUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20Business%20pilot`;
export const templateRequestUrl = `${founderEmailUrl}?subject=BharatFlow%20AI%20template%20access`;
export const dashboardUrl = "/templates";
export const githubRepoUrl = founderGithubUrl;
export const blueskyUrl = "https://bsky.app/profile/bharatflow.ai";
export const linkedInUrl = founderLinkedInUrl;
export const discordUrl = founderEmailUrl;
export const docsUrl = "/docs";
export const howToGetHelpUrl = `${docsUrl}#support`;
export const stripeClimateUrl = "https://climate.stripe.com/5VCRAq";
export const enterpriseLeadUrl = `${founderEmailUrl}?subject=Enterprise%20BharatFlow%20AI%20demo`;

export const legacyRedirects = {
  "/typebot-lib": "https://unpkg.com/typebot-js@2.0.21/dist/index.umd.min.js",
  "/typebot-lib/v2": "https://unpkg.com/typebot-js@2.1.3/dist/index.umd.min.js",
} as const;
