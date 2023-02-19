import React, { useState, useRef } from "react";

function Says() {
    const text = useRef(null);
    const image = useRef(null);

    function fetchImage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(text.current.value);
    }

    // async function fetchImage() {

    // }

    return (
        <>
            <img
                src="https://cataas.com/cat/says/Hello"
                alt="ju-nong"
                ref={image}
            />
            <form onSubmit={fetchImage}>
                <input type="text" placeholder="Enter Text" ref={text} />
            </form>
        </>
    );
}

export { Says as default };
