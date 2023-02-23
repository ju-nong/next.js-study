import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { colorChange } from "@/styles";
import { useThemeState, useThemeDispatch } from "@/styles/theme";

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
    padding: 2rem 1rem 1rem 1rem;

    a {
        color: ${({ theme }) => theme.color.noBase};
        font-weight: bold;
        text-transform: capitalize;

        ${({ theme }) => colorChange(theme.color.noBase)}
    }
`;

const ModeMenuStyled = styled.div`
    display: flex;
    position: absolute;
    gap: 0.5rem;
    z-index: 100;
    right: 1rem;

    & > * {
        cursor: pointer;
    }

    button {
        font-size: 1rem;
        background: none;
    }

    span {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
    }
`;

function Header() {
    const menus = ["home", "tag", "gif", "says"];

    const theme = useThemeState();
    const dispatch = useThemeDispatch();

    const changeTheme = () => dispatch({ type: "CHANGE_THMEM" });

    return (
        <HeaderStyled>
            <MenuContainer>
                {menus.map((menu, index) => (
                    <Link href={menu} key={index}>
                        {menu}
                    </Link>
                ))}
                <ModeMenuStyled>
                    <button onClick={changeTheme}>{theme ? `🌚` : `🌞`}</button>
                </ModeMenuStyled>
            </MenuContainer>
        </HeaderStyled>
    );
}

export { Header };
