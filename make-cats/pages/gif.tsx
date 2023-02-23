import React, { useState, useMemo, useRef, use, useEffect } from "react";
import styled from "@emotion/styled";
import { GifItem } from "@/components/GifItem";
import { AiOutlineLoading } from "react-icons/ai";

const ListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80vmin;
    padding-top: 3rem;
    margin: 0 auto;
    gap: 5vmin;
    list-style: none;
`;

const LoadingStyled = styled.li`
    width: 100%;
    flex: 0 0 100%;
    font-size: 3rem;
    text-align: center;

    @keyframes spin {
        to {
            transform: rotate(0deg);
        }

        from {
            transform: rotate(360deg);
        }
    }

    & > svg {
        animation: spin 1.5s infinite;
    }
`;

function Gif() {
    const loadingElement = useRef(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const [gifCount, setGifCount] = useState(8);

    const gifs = useMemo(
        () => new Array(gifCount).fill(null).map((_, index) => index),
        [gifCount],
    );

    useEffect(() => {
        if (!observer.current && loadingElement.current) {
            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setGifCount((count) => count + 8);
                    }
                },
                { threshold: 0.5 },
            );

            observer.current.observe(loadingElement.current);
        }
    }, []);

    return (
        <ListContainer>
            {gifs.map((gif) => (
                <GifItem key={gif} />
            ))}
            <LoadingStyled ref={loadingElement}>
                <AiOutlineLoading />
            </LoadingStyled>
        </ListContainer>
    );
}

export { Gif as default };
