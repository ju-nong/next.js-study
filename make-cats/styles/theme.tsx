import React, {
    ReactNode,
    useReducer,
    createContext,
    Dispatch,
    useContext,
} from "react";
import { ThemeProvider } from "@emotion/react";

interface ThemeProps {
    children: ReactNode;
}

type State = boolean;

type Action = { type: "CHANGE_THMEM" };

type ThemeDispatch = Dispatch<Action>;

const ThemeStateContext = createContext<State>(true);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "CHANGE_THMEM":
            return !state;
        default:
            throw new Error("Unhandled action");
    }
}

const themeConfg = {
    white: {
        color: {
            base: "#fff",
            subBase: "#a0abb8",
            noBase: "#000",
        },
        gifColors: ["#B9B9B9", "#D4D4D4"],
    },
    dark: {
        color: {
            base: "#000",
            subBase: "#a0abb8",
            noBase: "#fff",
        },
        gifColors: ["#656871", "#888b94"],
    },
};

function Theme({ children }: ThemeProps) {
    const [state, dispatch] = useReducer(reducer, true);

    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispatchContext.Provider value={dispatch}>
                <ThemeProvider theme={themeConfg[state ? `dark` : `white`]}>
                    {children}
                </ThemeProvider>
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    );
}

function useThemeState() {
    const state = useContext(ThemeStateContext);

    if (typeof state !== "boolean") {
        throw new Error("Theme State Context is null");
    }

    return state;
}

function useThemeDispatch() {
    const dispatch = useContext(ThemeDispatchContext);

    if (!dispatch) {
        throw new Error("Theme Dispatch Context is null");
    }

    return dispatch;
}

export { Theme, useThemeState, useThemeDispatch };
