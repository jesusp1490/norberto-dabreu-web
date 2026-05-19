import { ReactNode } from 'react';
import { MobileMenu } from './MobileMenu';
import { SidebarNav } from './SidebarNav';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen">
      <MobileMenu />

      <div className="lg:flex">
        <SidebarNav />

        <main className="min-h-screen flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}