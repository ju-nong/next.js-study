import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "@/styles";
import { css } from "@emotion/react";

interface TagButtonProps {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TagButtonStyled = styled.label`
    display: flex;
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    & > input {
        display: none;
    }

    & > span {
        ${({ theme }) => css`
            color: ${theme.color.subBase};
            ${colorChange(theme.color.subBase)};
        `};
        transition: color 0.5s;
        cursor: pointer;
    }

    & > input:checked + span {
        font-weight: bold;
        ${({ theme }) => css`
            color: ${theme.color.noBase};
            ${colorChange(theme.color.noBase)};
        `};
        transition: color 0.5s;
    }
`;

function TagButton({ text, onChange }: TagButtonProps) {
    return (
        <TagButtonStyled>
            <input value={text} type="radio" name="tag" onChange={onChange} />
            <span>{text}</span>
        </TagButtonStyled>
    );
}

export { TagButton };
