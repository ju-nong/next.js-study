import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [src, setSrc] = useState("");

    const callCats = async () => {
        const { data } = await axios.get(
            "https://cataas.com/cat/gif?json=true",
        );

        setSrc("https://cataas.com" + data.url);

        // const url = window.URL || window.webkitURL;
        // const blob = new Blob([data], { type: "image/gif" });
        // const src2 =;
        // setSrc( url.createObjectURL(blob));
    };

    return (
        <>
            <h1>김이슬 바보</h1>
            <p>누를 때 마다 생김 (안 나오면 좀 기다리셈)</p>
            <button onClick={callCats}>고양이 생성</button>
            <img src={src} />
        </>
    );
}
