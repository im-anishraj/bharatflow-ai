import { Link } from "@tanstack/react-router";
import type { Template } from "@typebot.io/templates";
import { Badge } from "@typebot.io/ui/components/Badge";
import { Card } from "@/components/Card";
import { TemplateIcon } from "./TemplateIcon";

type Props = {
  template: Template;
};

export const TemplateCard = ({ template }: Props) => {
  const slug = template.slug;
  const title = `${template.name} Workflow Template`;

  return (
    <Link to="/templates/$slug" params={{ slug }} aria-label={title}>
      <Card className="group hover:bg-muted/50 transition-colors cursor-pointer h-full p-4">
        <TemplateIcon template={template} />
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-balance leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground text-pretty line-clamp-2">
            {template.summary}
          </p>
        </div>
        <div className="flex gap-1.5 mt-auto flex-wrap">
          <Badge colorScheme="purple">{template.useCase}</Badge>
          {template.features.map((feature) => (
            <Badge key={feature} colorScheme="blue">
              {feature}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
};
