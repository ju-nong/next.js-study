import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { css } from "@emotion/react";

const ItemStyled = styled.li`
    width: 35vmin;
    height: 35vmin;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;

    & > img {
        width: 35vmin;
        height: 35vmin;
        object-fit: cover;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -100% 0;
        }
        100% {
            background-position: 100% 0;
        }
    }

    & > div {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        ${({ theme }) => css`
            background: ${theme.gifColors[0]};
            background-image: linear-gradient(
                to right,
                ${theme.gifColors[0]} 0%,
                ${theme.gifColors[1]} 20%,
                ${theme.gifColors[0]} 40%,
                ${theme.gifColors[0]} 100%
            );
        `}
        background-repeat: no-repeat;
        background-size: 600% 100%;
        transition: background 0.5s;

        width: 100%;
        height: 100%;
        position: absolute;
    }
`;

function GifItem() {
    const [load, setLoad] = useState(false);
    const [src, setSrc] = useState("");

    async function fetchImg() {
        const { data } = await axios.get(
            "https://cataas.com/cat/gif?json=true",
        );

        setSrc(`https://cataas.com${data.url}`);
    }

    useEffect(() => {
        if (!src.length) {
            fetchImg();
        }
    }, [src]);

    return (
        <ItemStyled>
            {!load && <div></div>}
            <img src={src} alt="gif" onLoad={() => setLoad(true)} />
        </ItemStyled>
    );
}

export { GifItem };
