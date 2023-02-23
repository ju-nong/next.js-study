function Home() {
    const worker = new Worker(new URL("../workers/worker.ts", import.meta.url));
    console.log(worker);

    // 워커 스레드로 메시지를 보냅니다.
    worker.postMessage("Hello from the main thread!");

    // 워커 스레드로부터 메시지를 수신합니다.
    worker.onmessage = (event) => {
        console.log("Message received from worker:", event.data);
    };

    return <>Hello World</>;
}

export { Home as default };
