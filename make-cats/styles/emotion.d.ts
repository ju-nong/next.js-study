import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        color: {
            base: string;
            subBase: string;
            noBase: string;
        };
        gifColors: string[];
    }
}
