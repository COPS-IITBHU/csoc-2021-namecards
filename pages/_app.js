import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/font.css";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="h-100 d-flex flex-column justify-content-between">
                <Header />
                <div className="mt-5 pt-5">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
