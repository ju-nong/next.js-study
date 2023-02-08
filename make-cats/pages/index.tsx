import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [src, setSrc] = useState("");

    const callCats = async () => {
        const { data } = await axios.get("/api/cat/gif");

        setSrc("https://cataas.com" + data.url);

        // const url = window.URL || window.webkitURL;
        // const blob = new Blob([data], { type: "image/gif" });
        // const src2 =;
        // setSrc( url.createObjectURL(blob));
    };

    return (
        <>
            <button onClick={callCats}>고양이 생성</button>
            <img src={src} />
        </>
    );
}
