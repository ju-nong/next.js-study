import React from "react";
import Layout from "@/components/layout/Layout";
import { Header } from "@/components/semantic/Header";

function index() {
    return (
        <Layout>
            <p>Hello World</p>
            <Header />
        </Layout>
    );
}

export { index as default };
