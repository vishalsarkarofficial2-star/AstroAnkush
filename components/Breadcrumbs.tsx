import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#C9A96A]">
        <li>
          <Link href="/" className="hover:text-[#E5B84B] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 opacity-60 text-[#E5B84B]" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#E5B84B] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#F7ECD3] font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
