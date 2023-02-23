import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const BodyStyled = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.8);
`;

interface BodyProps {
    children: ReactNode;
}

function Body({ children }: BodyProps) {
    return <BodyStyled>{children}</BodyStyled>;
}

export { Body };
