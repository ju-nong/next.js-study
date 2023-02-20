import React, { useState, useRef } from "react";
import styled from "@emotion/styled";

const SayContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SayImage = styled.img`
    max-height: 60vmin;
    object-fit: cover;
`;

const SayInput = styled.input`
    padding: 0.75rem;
    margin-top: 2rem;
    border-radius: 1rem;
`;

function Says() {
    const text = useRef<HTMLInputElement>(null);
    const image = useRef<HTMLImageElement>(null);

    function fetchImage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (image.current && text.current) {
            image.current.src = `https://cataas.com/cat/says/${text.current.value}`;
        }
    }

    return (
        <SayContainer>
            <SayImage
                // src="https://cataas.com/cat/says/Oh Hello"
                src="https://avatars.githubusercontent.com/u/81794712?v=4"
                alt="cat"
                ref={image}
            />
            <form onSubmit={fetchImage}>
                <SayInput
                    type="text"
                    placeholder="Enter Text"
                    maxLength={20}
                    ref={text}
                />
            </form>
        </SayContainer>
    );
}

export { Says as default };
