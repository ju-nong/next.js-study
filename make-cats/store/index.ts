import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tagReducer } from "./tags/reducer";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: { tagReducer },
    });

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore["getState"]>;
type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export { wrapper as default };
export type { AppStore, AppState, AppThunk };
