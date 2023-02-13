import "@/styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "@/store";
import { Provider } from "react-redux";
import axios from "axios";
import { tagActions } from "@/store/tags/reducer";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App({ Component, ...pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Component {...props.pageProps} />
            </Provider>
        </QueryClientProvider>
    );
}

export { App as default };
