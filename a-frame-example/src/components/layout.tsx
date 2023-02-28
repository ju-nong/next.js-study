import React, { ReactNode } from "react";
import { Header } from "@/components/Header";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export { Layout };
