import "@/styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "@/store";
import Layout from "./layout";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Theme } from "@/styles/theme";

const queryClient = new QueryClient();

function App({ Component, ...pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Theme>
                    <Layout>
                        <Component {...props.pageProps} />
                    </Layout>
                </Theme>
            </Provider>
        </QueryClientProvider>
    );
}

export { App as default };
