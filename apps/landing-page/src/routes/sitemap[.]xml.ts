import { createFileRoute } from "@tanstack/react-router";
import { templates } from "@typebot.io/templates";
import { currentBaseUrl } from "@/constants";

type SitemapUrlEntry = {
  loc: string;
  lastmod: string;
};

const templatesIndexLastmod = templates.reduce(
  (latest, template) =>
    template.updatedAt > latest ? template.updatedAt : latest,
  "2026-01-05",
);

function generateSitemapXml(entries: SitemapUrlEntry[]) {
  const urls = entries
    .map((entry) => {
      return `\n<url><loc>${entry.loc}</loc><lastmod>${entry.lastmod}</lastmod></url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
          { loc: `${currentBaseUrl}/`, lastmod: "2026-05-27" },
          { loc: `${currentBaseUrl}/pricing`, lastmod: "2026-05-27" },
          { loc: `${currentBaseUrl}/about`, lastmod: "2026-05-27" },
          { loc: `${currentBaseUrl}/privacy-policy`, lastmod: "2026-05-27" },
          { loc: `${currentBaseUrl}/terms-of-service`, lastmod: "2026-05-27" },
          {
            loc: `${currentBaseUrl}/business-continuity`,
            lastmod: "2026-05-27",
          },
          {
            loc: `${currentBaseUrl}/templates`,
            lastmod: templatesIndexLastmod,
          },
        ] satisfies SitemapUrlEntry[];

        const templateEntries: SitemapUrlEntry[] = templates.map(
          (template) => ({
            loc: `${currentBaseUrl}/templates/${template.slug}`,
            lastmod: template.updatedAt,
          }),
        );

        const xml = generateSitemapXml([...staticEntries, ...templateEntries]);

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
