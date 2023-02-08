import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const HeaderStyled = styled.header`
    & > * {
        margin-right: 2rem;
    }
`;

const headerStyle = css`
    & > * {
        margin-right: 2rem;
    }
`;

function Header() {
    return (
        // <header css={headerStyle}></header>
        <HeaderStyled>
            <Link href="/about" title="About Page">
                About Page
            </Link>

            <Link href="/intro" title="Intro Page">
                Intro Page
            </Link>
        </HeaderStyled>
    );
}

export { Header };
