import React from "react";
import Link from "next/link";

function intro() {
    return (
        <div>
            <h1>INTRO</h1>
            <Link href="/">Back</Link>
        </div>
    );
}

export { intro as default };
