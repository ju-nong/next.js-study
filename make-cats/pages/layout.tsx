import React, { ReactNode } from "react";
import { Body } from "@/components/semantic/Body";
import { Header } from "@/components/semantic";

interface LayoutProps {
    children: ReactNode;
}

function layout({ children }: LayoutProps) {
    return (
        <Body>
            <Header />
            {children}
        </Body>
    );
}

export { layout as default };
