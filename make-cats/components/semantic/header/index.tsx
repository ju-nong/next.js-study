import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { colorChange } from "@/styles";

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;

    & > a {
        color: white;
        font-weight: bold;
        text-transform: capitalize;

        ${colorChange("white")}
    }
`;

function Header() {
    const menus = ["home", "tag", "gif", "says"];

    return (
        <HeaderStyled>
            {menus.map((menu, index) => (
                <Link href={menu} key={index}>
                    {menu}
                </Link>
            ))}
        </HeaderStyled>
    );
}

export { Header as default };
