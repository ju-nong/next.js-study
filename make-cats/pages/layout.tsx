import React, { ReactNode } from "react";
import { css, Global, useTheme } from "@emotion/react";
import { Header } from "@/components/semantic";
import { transparentize } from "polished";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const theme = useTheme();

    return (
        <>
            <Global
                styles={css`
                    body {
                        transition: background-color 0.5s;
                        background-color: ${transparentize(
                            0.2,
                            theme.color.base,
                        )};
                    }

                    *::-webkit-scrollbar-track {
                        transition: background 0.5s;
                        background: ${transparentize(
                            0.8,
                            theme.color.base,
                        )}; /*스크롤바 뒷 배경 색상*/
                    }
                `}
            />
            <Header />
            {children}
        </>
    );
}

export { Layout as default };
