const onmessage = function (event: any) {
    this.postMessage(event);
};

export { onmessage as default };
