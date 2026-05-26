import { Dialog } from "@typebot.io/ui/components/Dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/table";

const businessConversationTiers = [
  {
    maxConversations: "10,000",
    pricePerMonth: "included",
    pricePerThousand: "included",
  },
  {
    maxConversations: "25,000",
    pricePerMonth: "Rs. 39,999",
    pricePerThousand: "Rs. 1,600",
  },
  {
    maxConversations: "50,000",
    pricePerMonth: "Rs. 69,999",
    pricePerThousand: "Rs. 1,400",
  },
  {
    maxConversations: "100,000",
    pricePerMonth: "Rs. 1,19,999",
    pricePerThousand: "Rs. 1,200",
  },
  {
    maxConversations: "100,000+",
    pricePerMonth: "custom",
    pricePerThousand: "custom",
  },
] as const;

export const TiersDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Dialog.Root isOpen={open} onClose={onClose}>
    <Dialog.Popup>
      <Dialog.Title>Business conversation tiers</Dialog.Title>
      <Dialog.CloseButton />
      <TableRoot>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Max conversations</TableHead>
              <TableHead>Prototype price per month</TableHead>
              <TableHead>Approx. price per 1k</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businessConversationTiers.map((tier) => (
              <TableRow key={tier.maxConversations}>
                <TableCell>{tier.maxConversations}</TableCell>
                <TableCell>{tier.pricePerMonth}</TableCell>
                <TableCell>{tier.pricePerThousand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </Dialog.Popup>
  </Dialog.Root>
);
