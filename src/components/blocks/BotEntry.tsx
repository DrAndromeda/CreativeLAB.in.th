import { Button } from "@/components/ui/Button";
import { telegramLink, whatsappLink } from "@/lib/integrations";

export function BotEntry({
  serviceContext,
  className = "",
}: {
  serviceContext?: string;
  className?: string;
}) {
  const wa = whatsappLink(
    serviceContext ? `Hi, I'd like to ask about ${serviceContext}` : undefined
  );
  const tg = telegramLink();

  if (!wa && !tg) {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <Button href="/contact" variant="secondary">
          Message Us
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {wa && (
        <Button href={wa} variant="secondary" external>
          Chat on WhatsApp
        </Button>
      )}
      {tg && (
        <Button href={tg} variant="secondary" external>
          Chat on Telegram
        </Button>
      )}
    </div>
  );
}
