import React, { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";

const themeConfg = {
    white: {},
    dark: {
        color: {
            base: "#fff",
            subBase: "#a0abb8",
            noBase: "#000",
        },
        // bgColor: "rgba(0, 0, 0, 0.8)",
        // homeST: "rgba(255, 255, 255, 0.3)",
        tagST: ["#656871", "#888b94", "#656871", "#656871"],
    },
};

interface ThemeProps {
    children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={themeConfg}>{children}</ThemeProvider>
);

export { Theme };
