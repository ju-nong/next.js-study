import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { colorChange } from "@/styles";

const HeaderStyled = styled.header`
    width: 100%;
    overflow: hidden;
`;

const MenuContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: space-evenly;
    padding: 1rem;

    a {
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
            <MenuContainer>
                {menus.map((menu, index) => (
                    <Link href={menu} key={index}>
                        {menu}
                    </Link>
                ))}
            </MenuContainer>
        </HeaderStyled>
    );
}

export { Header };
