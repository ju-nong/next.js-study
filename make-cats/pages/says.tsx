import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import { css } from "@emotion/react";

const SayContainer = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    height: 60vmin;
    position: relative;

    div {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    div.show {
        display: block;
    }
`;

const ImageStyled = styled.img`
    cursor: pointer;
    height: 100%;
    object-fit: cover;
`;

const ImageLoadingStyled = styled.div`
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.color.noBase};
    transition: color 0.5s;

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

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

interface GuideStyledProps {
    fontSize: number;
}

const InputStyled = styled.input`
    width: 180px;
    padding: 0.75rem;
    border-radius: 1rem;
    outline: none;
    ${({ theme }) => css`
        color: ${theme.color.base};
        background-color: ${theme.color.noBase};
    `}
    transition: color 0.5s, background-color 0.5s;
`;

const InputGuideStyled = styled.p<GuideStyledProps>`
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.color.subBase};
    font-size: ${(props) => `${props.fontSize}rem`};
    transition: color 0.5s, font-size 0.5s;
`;

function Says() {
    const [load, setLoad] = useState<boolean>(false);
    const [size, setSize] = useState<number>(0.75);
    const text = useRef<HTMLInputElement>(null);
    const image = useRef<HTMLImageElement>(null);

    const validReg = /^[a-zA-Z0-9!\s]+$/;

    async function fetchImage() {
        if (!load) {
            return;
        }

        if (text.current && image.current) {
            if (!validReg.test(text.current.value)) {
                setSize((size) => size + 0.25);

                return;
            }

            setSize(0.75);

            setLoad(false);

            const { data } = await axios.get(
                `https://cataas.com/cat/says/${
                    text.current.value || "Oh Hello"
                }?json=true`,
            );

            image.current.src = `https://cataas.com${data.url}`;
        }
    }

    function submitText(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetchImage();
    }

    return (
        <SayContainer>
            <ImageContainer>
                <ImageStyled
                    src="https://cataas.com/cat/says/Oh Hello"
                    alt="cat"
                    ref={image}
                    onClick={fetchImage}
                    onLoad={() => setLoad(true)}
                />
                <ImageLoadingStyled className={`${load ? "" : "show"}`}>
                    <AiOutlineLoading />
                </ImageLoadingStyled>
            </ImageContainer>
            <FormStyled onSubmit={submitText}>
                <InputStyled
                    type="text"
                    placeholder="Enter Text"
                    maxLength={20}
                    ref={text}
                />
                <InputGuideStyled fontSize={size}>
                    English and numbers only.
                </InputGuideStyled>
            </FormStyled>
        </SayContainer>
    );
}

export { Says as default, SayContainer as BigImageContainer };
