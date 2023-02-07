import React from "react";
import Link from "next/link";

function about() {
    return (
        <div>
            <h1>ABOUT</h1>
            <Link href="/">Back</Link>
        </div>
    );
}

export { about as default };
