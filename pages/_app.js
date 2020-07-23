import "../public/css/layout.css";
import "../public/css/fonts.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
};

export default MyApp;