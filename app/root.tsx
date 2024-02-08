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
        <main className="bg-bg-200 h-screen flex  gap-4 p-4">
          <nav className=" max-w-64">
            <div className="hs-accordion-group ">
              <div
                className="hs-accordion active bg-bg-100 border border-accent-100 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
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
                  <div className="pb-4 px-5">
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
                className="hs-accordion bg-bg-100 border border-accent-100 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
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
 <div className="pb-4 px-5">
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
                className="hs-accordion bg-bg-100 border border-accent-100 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-accent-100 inline-flex items-center gap-x-3 w-full font-semibold text-start text-accent-200 py-4 px-5 hover:text-accent-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
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
 <div className="pb-4 px-5">
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
