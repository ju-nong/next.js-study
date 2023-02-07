import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyled = styled.header`
    & > * {
        margin-left: 2rem;
    }
`;

function Header() {
    return (
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
