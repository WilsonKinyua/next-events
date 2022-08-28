import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
config.autoAddCss = false;
import React from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div className="navbar bg-pink-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            NextEvents
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <Link href="/events" className="btn text-white">
            Browse All Events
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
