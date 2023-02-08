import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const HeaderStyled = styled.header`
    background-color: #000;
`;

function Header() {
    const menus = ["home", "tag", "gif", "says"];

    return (
        <HeaderStyled>
            {menus.map((menu) => (
                <Link href={menu}>{menu}</Link>
            ))}
        </HeaderStyled>
    );
}

export { Header as default };
