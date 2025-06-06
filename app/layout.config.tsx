import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'next/link';
import Image from 'next/image';
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  nav: {
    children: (
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Seyfert Logo" className="h-6 w-6" width={24} height={24} />
        <Link href="/">Seyfert</Link>
      </div>
    ),
  },
  links: [],
};
