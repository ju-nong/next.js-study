import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

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
        background: #656871;
        background-image: linear-gradient(
            to right,
            #656871 0%,
            #888b94 20%,
            #656871 40%,
            #656871 100%
        );
        background-repeat: no-repeat;
        background-size: 600% 100%;

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
