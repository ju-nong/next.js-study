import React, { useState, useRef, useEffect } from "react";
import { BigImageContainer } from "./says";
import styled from "@emotion/styled";
import axios from "axios";

const OopsImage = styled.img`
    height: 70vmin;
`;

export default function NotFound() {
    const image = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (image.current) {
            axios
                .get(`https://cataas.com/cat/says/Oops?json=true`)
                .then((response) => response.data);

            // image.current.src = `https://cataas.com${data.url}`;
        }
    }, []);

    return (
        <BigImageContainer>
            <OopsImage src="https://cataas.com/cat/says/Oops!" ref={image} />
        </BigImageContainer>
    );
}
