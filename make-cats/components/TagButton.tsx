import React from "react";
import styled from "@emotion/styled";
import { colorChange } from "@/styles";

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
        color: #a0abb8;
        cursor: pointer;
        ${colorChange("#a0abb8")};
    }

    & > input:checked + span {
        color: #fff;
        font-weight: bold;
        ${colorChange("#fff")};
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
