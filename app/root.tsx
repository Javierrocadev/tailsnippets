import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { useEffect } from "react";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
if (typeof window !== "undefined") {
  require("preline/preline");
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="bg-bg-100 dark:bg-accent-200 h-screen flex  gap-4 p-4">
          <nav className="flex flex-col gap-y-4 max-w-64">
            {/* <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
</button>
<button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light">
  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8a2 2 0 1 0 4 4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
</button> */}
            <div className=" duration-300 border rounded-lg bg-bg-200 hover:bg-primary-100 dark:bg-primary-100 hover:dark:bg-primary-300 border-accent-200 dark:border-text-200">
              {/* <button
                type="button"
                className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center   p-2 text-accent-200 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="dark"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <p>Light mode</p>
              </button>
              <button
                type="button"
                className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center p-2 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="light"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 8a2 2 0 1 0 4 4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <p>Dark </p>
              </button> */}
              <button
                type="button"
                className="w-full p-2 hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-accent-200 dark:text-accent-200 hover:text-accent-100 font-medium dark:hover:text-gray-500"
                data-hs-theme-click-value="dark"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 mr-1 group-hover:bg-accent-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <p>Dark mode</p>
              </button>
              <button
                type="button"
                className="w-full p-2 hidden hs-dark-mode group hs-dark-mode-active:flex items-center    font-medium dark:text-text-200 dark:hover:text-accent-100"
                data-hs-theme-click-value="light"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 mr-1 group-hover:bg-accent-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 8a2 2 0 1 0 4 4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <p>Light mode</p>
              </button>
            </div>

            <div className=" duration-300  rounded-lg bg-primary-300  hover:bg-primary-100 dark:bg-primary-100 hover:dark:bg-primary-300 border-accent-200 dark:border-text-200">
              <button className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 w-full py-3 border text-left  text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                <svg
                  className="w-6 h-6 fill-neutral-50"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    className="svg-fill-primary"
                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                  ></path>
                </svg>
                Star on Github
              </button>
            </div>

            <div className="hs-accordion-group ">
              <div
                className="hs-accordion active bg-bg-200 border border-accent-200 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-primary-100 dark:border-text-200"
                id="hs-bordered-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 hs-accordion-active:dark:text-accent-200 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-text-200 dark:hover:text-accent-200 dark:hover:bg-primary-300 dark:focus:outline-none dark:focus:text-accent-200"
                  aria-controls="hs-basic-bordered-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Cards
                </button>
                <div
                  id="hs-basic-bordered-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-one"
                >
                  <div className="pb-4 px-5 mt-4">
                    <Link to="/components/1">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                    <Link to="/components/2">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                    <Link to="/components/3 ">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion bg-bg-200 border border-accent-200 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-primary-100 dark:border-text-200"
                id="hs-bordered-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 hs-accordion-active:dark:text-accent-200 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-text-200 dark:hover:text-accent-200 dark:hover:bg-primary-300 dark:focus:outline-none dark:focus:text-accent-200"
                  aria-controls="hs-basic-bordered-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-bordered-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-two"
                >
                  <div className="pb-4 px-5 mt-4">
                    <Link to="/components/1">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                    <Link to="/components/2">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion bg-bg-200 border border-accent-200 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-primary-100 dark:border-text-200"
                id="hs-bordered-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 hs-accordion-active:dark:text-accent-200 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-text-200 dark:hover:text-accent-200 dark:hover:bg-primary-300 dark:focus:outline-none dark:focus:text-accent-200"
                  aria-controls="hs-basic-bordered-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-bordered-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-three"
                >
                  <div className="pb-4 px-5 mt-4">
                    <Link to="/components/1">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                    <Link to="/components/2">
                      <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex flex-col flex-grow gap-4">
            <Outlet />
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
