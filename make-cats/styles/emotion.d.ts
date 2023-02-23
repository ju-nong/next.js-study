import "@emotion/react";

type ThemeType = "white" | "dark";

declare module "@emotion/react" {
    export interface Theme {
        white: {
            color: {
                base: string;
                subBase: string;
                noBase: string;
            };
            tagSkeletonColors: string[];
        };
        dark: {
            color: {
                base: string;
                subBase: string;
                noBase: string;
            };
            tagSkeletonColors: string[];
        };
    }
}
