import axios from "axios";
import styled from "@emotion/styled";
import { useState } from "react";

const ImageStyled = styled.img`
    width: 100px;
    height: 100px;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    margin: 5rem;

    animation: spin infinite 1.5s linear;
`;

export default function Home() {
    const [src, setSrc] = useState("");

    const callCats = async () => {
        const { data } = await axios.get(
            "https://cataas.com/cat/gif?json=true"
        );

        setSrc("https://cataas.com" + data.url);

        // const url = window.URL || window.webkitURL;
        // const blob = new Blob([data], { type: "image/gif" });
        // const src2 =;
        // setSrc( url.createObjectURL(blob));
    };

    return (
        <>
            {/* <h1>아리 돌리기</h1>
            <ImageStyled src="ari2.jpg" />
            <p>누를 때 마다 생김 (안 나오면 좀 기다리셈)</p>
            얘를 눌러요 => <button onClick={callCats}>고양이 생성</button>
            <img src={src} /> */}
        </>
    );
}
