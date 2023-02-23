import React, { ReactNode } from "react";
import { Theme, ThemeProvider } from "@emotion/react";

const themeConfg: Theme = {
    white: {
        color: {
            base: "#000",
            subBase: "#a0abb8",
            noBase: "#fff",
        },
        // bgColor: "rgba(0, 0, 0, 0.8)",
        // homeST: "rgba(255, 255, 255, 0.3)",
        tagSkeletonColors: ["#656871", "#888b94", "#656871", "#656871"],
    },
    dark: {
        color: {
            base: "#fff",
            subBase: "#a0abb8",
            noBase: "#000",
        },
        // bgColor: "rgba(0, 0, 0, 0.8)",
        // homeST: "rgba(255, 255, 255, 0.3)",
        tagSkeletonColors: ["#656871", "#888b94", "#656871", "#656871"],
    },
};

interface ThemeProps {
    children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={themeConfg}>{children}</ThemeProvider>
);

export { Theme };
