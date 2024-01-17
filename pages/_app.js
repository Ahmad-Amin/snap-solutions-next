import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import "react-image-lightbox/style.css";
import "../styles/style.css";
import "../styles/responsive.css";
import Layout from "../components/_App/Layout";
import { Fragment, useEffect, useState } from "react";
import PreLoad from "../components/_App/Preload";
import UserProvider from "../store/UserProvider";
// import "../styles/tailwind.css"
import "../styles/tailwind-all.css";
// import "react-toastify/dist/ReactToastify.css";
import "../styles/custom-base-tailwind.css"
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // This useEffect runs on the client side after the component mounts
    const portalContainer = document.getElementById("overlays");

    if (!portalContainer) {
      const div = document.createElement("div");
      div.id = "overlays";
      document.body.appendChild(div);
    }
  }, []); 

  return (
    <Fragment>
      <ToastProvider>
        <UserProvider>
          <Head>
            <title>Snap Credit Solutions</title>
            <link
              rel="shortcut icon"
              href="leza\public\images\favicon.png"
              type="image/x-icon"
            />
            <link rel="stylesheet" href="assets/css/flaticon.min.css" />

            <link
              href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
              rel="stylesheet"
            />

            {/* Font Awesome */}
            <link
              rel="stylesheet"
              href="assets/css/fontawesome-5.14.0.min.css"
            />
            {/* Bootstrap */}
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            {/* Magnific Popup */}
            <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
            {/* Nice Select */}
            <link rel="stylesheet" href="assets/css/nice-select.min.css" />
            {/* Type Writer */}
            <link
              rel="stylesheet"
              href="assets/css/jquery.animatedheadline.css"
            />
            {/* Animate */}
            <link rel="stylesheet" href="assets/css/animate.min.css" />
            {/* Slick */}
            <link rel="stylesheet" href="assets/css/slick.min.css" />
            {/* Main Style */}
            <link rel="stylesheet" href="assets/css/style.css" />
          </Head>
          {load && <PreLoad />}
          <Component {...pageProps} />
        </UserProvider>
      </ToastProvider>
    </Fragment>
  );
}
export default MyApp;
