"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

/**
 * Breadcrumb Component with automatic JSON-LD schema injection
 * Improves navigation UX and SEO with structured breadcrumb data
 *
 * Usage: <Breadcrumb /> - automatically generates breadcrumbs from current path
 */
export function Breadcrumb() {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, url };
    }),
  ];

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  // Generate JSON-LD schema for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://devanshinternational.com${item.url}`,
    })),
  };

  return (
    <>
      {/* Inject breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-slate-900 dark:text-slate-100"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-violet-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
