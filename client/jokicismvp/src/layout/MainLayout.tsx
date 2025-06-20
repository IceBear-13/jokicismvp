import type { ReactNode } from 'react';
import Header from '../components/header/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto pt-[85px] flex">
        {children}
      </main>
    </div>
  );
}