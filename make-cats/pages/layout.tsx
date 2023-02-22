import React, { ReactNode } from "react";
import { Header } from "@/components/semantic";

interface LayoutProps {
    children: ReactNode;
}

function layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export { layout as default };
