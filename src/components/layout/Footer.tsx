import { LocalizedLink as Link } from "@/components/ui/LocalizedLink";
import { FOOTER_COLUMNS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-inverse bg-inverse text-text-inverse">
      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs tracking-[0.15em] text-text-inverse-secondary uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-inverse-secondary hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-inverse pt-8 text-sm text-text-inverse-secondary sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-text-inverse">
            CreativeLAB — {SITE.location}
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-text-inverse">
              <bdi>{SITE.email}</bdi>
            </a>
          </p>
        </div>
        <p className="mt-6 text-xs text-text-inverse-secondary">
          © {year} {SITE.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
