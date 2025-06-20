import type { ReactNode } from "react";

interface SearchLayoutProps {
  children: ReactNode;
}


export default function SearchLayout({children}: SearchLayoutProps) {
    return (
        <div className="w-full h-full px-40 py-5 overflow-auto">
            {children}
        </div>
    )
}