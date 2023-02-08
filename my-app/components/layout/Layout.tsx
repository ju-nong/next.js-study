import React from "react";
import styled from "@emotion/styled";

interface layoutProps {
    children: React.ReactNode;
}

const LayoutStyled = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
`;

function Layout({ children }: layoutProps) {
    return <LayoutStyled>{children}</LayoutStyled>;
}

export { Layout as default };
