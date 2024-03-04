import avatar1 from "~/images/avatar1.png";
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
import { TbBrandGithub, TbSun, TbMoon } from "react-icons/tb";

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
        <div
          id="sidebar-mini"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-48 bg-transparent  md:block md:translate-x-0 md:end-auto md:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="bg-bg-100 dark:bg-accent-200 h-screen flex flex-col md:flex-row gap-4 p-4">
            <nav className="flex flex-col gap-y-4 md:w-44 w-full shrink-0">
              

              <div className="">
                <button
                  type="button"
                  className="w-full relative p-2 hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-accent-200 dark:text-accent-200 hover:text-accent-100 font-medium dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
                  <div className="relative text-black group-hover:text-white flex justify-center items-center">
                    <TbMoon className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
                    <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                      Dark mode
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="relative w-full p-2 hidden hs-dark-mode group hs-dark-mode-active:flex items-center    font-medium dark:text-text-200 dark:hover:text-accent-100"
                  data-hs-theme-click-value="light"
                >
                  <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
                  <div className="relative text-black group-hover:text-white flex justify-center items-center">
                    <TbSun className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
                    <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                      Light Mode
                    </p>
                  </div>
                </button>
              </div>

              {/* <div className=" duration-300 border rounded-full bg-bg-200 hover:bg-primary-100 dark:bg-primary-100 hover:dark:bg-primary-300 border-accent-200 dark:border-text-200">
                <button
                  type="button"
                  className="w-full p-2 hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-accent-200 dark:text-accent-200 hover:text-accent-100 font-medium dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <TbSun className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 fill-bg-100 mr-1 group-hover:bg-accent-100" />
                  <p>Dark mode</p>
                </button>
                
                <button
                  type="button"
                  className="w-full p-2 hidden hs-dark-mode group hs-dark-mode-active:flex items-center    font-medium dark:text-text-200 dark:hover:text-accent-100"
                  data-hs-theme-click-value="light"
                >
                  <TbMoon className="flex-shrink-0 w-6 h-6 bg-accent-200 rounded-full p-1 stroke-bg-100 fill-bg-100 mr-1 group-hover:bg-accent-100" />
                  <p>Light mode</p>
                </button>
              </div> */}

              <div className=" duration-300  rounded-full bg-primary-300  hover:bg-primary-100 dark:bg-primary-100 hover:dark:bg-primary-300 border-accent-200 dark:border-text-200">
                <a href="https://github.com/Javierrocadev/tailsnippets" className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500  hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline  hover:underline-offset-4 origin-left hover:decoration-2  relative bg-neutral-900 w-full py-2 border text-left  text-gray-50 text-base font-bold rounded-full overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                  <TbBrandGithub className="w-5 h-5 stroke-transparent duration-300 fill-neutral-50 group-hover:fill-amber-300 " />
                  Star on Github
                </a>
              </div>

              <div className="hs-accordion-group ">
                {/* ------------------------CARDS GROUP----------------------------------- */}
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
                        <img
                          className="w-24 h-12 mb-2 bg-white rounded object-contain "
                          src={avatar1}
                          alt="avatar1"
                        />
                      </Link>
                      <Link to="/components/2">
                        <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                      </Link>
                      <Link to="/components/3 ">
                        <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                      </Link>
                      <Link to="/components/4 ">
                        <div className="w-24 h-12 mb-2 bg-accent-100 dark:bg-accent-200 rounded flex items-center justify-center gap-2">
                          <div className="w-5 h-6 rounded-sm bg-primary-100 dark:bg-primary-200"></div>
                          <div className="w-5 h-6 rounded-sm bg-primary-100 dark:bg-primary-200"></div>
                          <div className="w-5 h-6 rounded-sm bg-primary-100 dark:bg-primary-200"></div>
                        </div>
                      </Link>
                      <Link to="/components/5 ">
                        <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* ------------------------GROUP----------------------------------- */}
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
                    Buttons
                  </button>
                  <div
                    id="hs-basic-bordered-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-bordered-heading-two"
                  >
                    <div className="pb-4 px-5 mt-4">
                      <Link to="/components/100">
                        <div className="w-24 h-12 mb-2 bg-accent-100 rounded"></div>
                      </Link>
                      <Link to="/components/101">
                        <div className="w-24 h-12 mb-2 bg-accent-100 rounded flex justify-center items-center">
                          <div className="w-12 h-4 bg-blue-400"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* ------------------------GROUP----------------------------------- */}
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
          </div>
        </div>
        <main className="bg-bg-100 dark:bg-accent-200 h-screen flex flex-col md:flex-row gap-4 p-4">
          <nav className="flex flex-row gap-y-4 md:w-44 w-full shrink-0 gap-4">
          <div className="w-full">
                <button
                  type="button"
                  className="w-full relative p-2 hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-accent-200 dark:text-accent-200 hover:text-accent-100 font-medium dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
                  <div className="relative text-black group-hover:text-white flex justify-center items-center">
                    <TbMoon className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
                    <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                      Dark mode
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="relative w-full p-2 hidden hs-dark-mode group hs-dark-mode-active:flex items-center    font-medium dark:text-text-200 dark:hover:text-accent-100"
                  data-hs-theme-click-value="light"
                >
                  <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
                  <div className="relative text-black group-hover:text-white flex justify-center items-center">
                    <TbSun className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
                    <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                      Light Mode
                    </p>
                  </div>
                </button>
              </div>
            <button
              type="button"
              className="duration-300 p-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-accent-200 bg-bg-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary-100 dark:border-gray-700 dark:text-accent-200 dark:hover:bg-primary-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#sidebar-mini"
              aria-controls="sidebar-mini"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="flex-shrink-0 size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
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
