import { ModelContainer } from "@/components/ModelContainer";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Home: NextPage = () => {
    const models = [
        "apartment",
        "exllu",
        "hotel",
        "house",
        "market",
        "nakagin",
        "office_small",
        "streetBlock",
        "villa",
        "villa_3floor",
        "villa_4floor",
        "villa_12room",
    ];

    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>loading</>;
    }

    return (
        <Wrap>
            {models.map((model) => (
                <ModelContainer modelName={model} key={model} />
            ))}
        </Wrap>
    );
};

export default Home;
