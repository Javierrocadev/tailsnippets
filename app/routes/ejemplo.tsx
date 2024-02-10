import { useParams } from "@remix-run/react";
import React from "react";


function ejemplo() {


  const copyHTMLToClipboard = () => {
    const htmlToCopy = componente.html;
    navigator.clipboard.writeText(htmlToCopy).then(() => {
      alert('HTML copiado al portapapeles');
    }).catch((error) => {
      console.error('Error al copiar HTML al portapapeles:', error);
      alert('Error al copiar HTML al portapapeles');
    });
  };

  const Splitter = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const firstHalfRef = React.useRef<HTMLDivElement>(null);
    const secondHalfRef = React.useRef<HTMLDivElement>(null);
    const resizerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseDown = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const startPos = {
          x: e.clientX,
          y: e.clientY,
        };
        const currentLeftWidth =
          firstHalfRef.current!.getBoundingClientRect().width;

        const handleMouseMove = (e: MouseEvent) => {
          const dx = e.clientX - startPos.x;
          const dy = e.clientY - startPos.y;
          updateWidth(currentLeftWidth, dx);
          updateCursor();
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          resetCursor();
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      },
      []
    );

    const handleTouchStart = React.useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const startPos = {
          x: touch.clientX,
          y: touch.clientY,
        };
        const currentLeftWidth =
          firstHalfRef.current!.getBoundingClientRect().width;

        const handleTouchMove = (e: TouchEvent) => {
          const touch = e.touches[0];
          const dx = touch.clientX - startPos.x;
          const dy = touch.clientY - startPos.y;
          updateWidth(currentLeftWidth, dx);
          updateCursor();
        };

        const handleTouchEnd = () => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
          resetCursor();
        };

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      },
      []
    );

    const updateWidth = (currentLeftWidth: number, dx: number) => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;

      if (!container || !firstHalfEle) {
        return;
      }

      const containerWidth = container.getBoundingClientRect().width;
      const delta = currentLeftWidth + dx;
      const newFirstHalfWidth = (delta * 100) / containerWidth;
      firstHalfEle.style.width = `${newFirstHalfWidth}%`;
    };

    const updateCursor = () => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;
      const resizerEle = resizerRef.current!;
      const secondHalfEle = secondHalfRef.current!;

      if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
        return;
      }

      resizerEle.style.cursor = "ew-resize";
      document.body.style.cursor = "ew-resize";
      firstHalfEle.style.userSelect = "none";
      firstHalfEle.style.pointerEvents = "none";
      secondHalfEle.style.userSelect = "none";
      secondHalfEle.style.pointerEvents = "none";
    };

    const resetCursor = () => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;
      const resizerEle = resizerRef.current!;
      const secondHalfEle = secondHalfRef.current!;

      if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
        return;
      }

      resizerEle.style.removeProperty("cursor");
      document.body.style.removeProperty("cursor");
      firstHalfEle.style.removeProperty("user-select");
      firstHalfEle.style.removeProperty("pointer-events");
      secondHalfEle.style.removeProperty("user-select");
      secondHalfEle.style.removeProperty("pointer-events");
    };

    return (
      <div className="splitter" ref={containerRef}>
        <div className="splitter__first" ref={firstHalfRef}>
        <div className="py-10 lg:py-20 first:pt-10 last:pb-0">
        <h2 id="hero-center-aligned-in-dark-bg" className="scroll-mt-12 mb-5">
          <a className="text-gray-800 hover:text-gray-600 text-lg font-semibold dark:text-gray-200 dark:hover:text-gray-400" href="#hero-center-aligned-in-dark-bg">
            Center Aligned in Dark Background
          </a>
        </h2>

       
        <div className="mt-5 space-y-4">
          <div className="flex justify-between items-center">
            
            <div className="flex bg-gray-200/[.5] hover:bg-gray-200 rounded-xl transition p-1 dark:bg-gray-700 dark:hover:bg-gray-700/[.7]">
              <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-800 hs-tab-active:shadow-sm text-xs sm:text-sm text-gray-800 hover:text-black font-medium rounded-lg py-2 px-3 dark:text-gray-200 dark:hover:text-white dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:text-gray-200" id="ctc-component-center-aligned-in-dark-bg-tab-preview-item" data-hs-tab="#ctc-component-center-aligned-in-dark-bg-tab-preview" aria-controls="ctc-component-center-aligned-in-dark-bg-tab-preview" role="tab">
                  Preview
                </button>
                <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-800 hs-tab-active:shadow-sm text-xs sm:text-sm text-gray-800 hover:text-black font-medium rounded-lg py-2 px-3 dark:text-gray-200 dark:hover:text-white dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:text-gray-200 active" id="ctc-component-center-aligned-in-dark-bg-tab-html-item" data-hs-tab="#ctc-component-center-aligned-in-dark-bg-tab-html" aria-controls="ctc-component-center-aligned-in-dark-bg-tab-html" role="tab">
                  HTML
                </button>
              </nav>
            </div>
            

            <div className="flex gap-x-2">
              
              <button type="button" className="py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:bg-gray-100 text-xs dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" data-hs-component-dark-mode="#ctc-component-center-aligned-in-dark-bg-tab-preview">
                <svg data-svg="" className="hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 8a2 2 0 1 0 4 4"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>

                <svg data-svg="" className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
        
              <button type="button" className="js-clipboard py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:bg-gray-100 text-xs sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" data-hs-clipboard-options="{
                    &quot;contentTarget&quot;: &quot;#ctc-component-center-aligned-in-dark-bg-tab-html code&quot;,
                    &quot;successText&quot;: &quot;Copied&quot;
                }">
                <svg className="js-clipboard-default flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                </svg>

                <svg className="js-clipboard-success flex-shrink-0 hidden w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rotate-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="js-clipboard-success-text">Copy</span>
              </button>
     
              <a className="py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:bg-gray-100 text-xs dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" href="../examples/html/hero-center-aligned-in-dark-bg.html" target="_blank">
                <svg className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
       
            </div>
          </div>

          <div className="mt-3">
    
            <div id="ctc-component-center-aligned-in-dark-bg-tab-preview" role="tabpanel" aria-labelledby="ctc-component-center-aligned-in-dark-bg-tab-preview-item" className="hidden">
        
              <div className="relative bg-gray-400 rounded-lg shadow-sm overflow-hidden ring-1 ring-gray-800 ring-opacity-5 dark:ring-slate-700">
                <div className="relative w-full min-w-full max-w-full lg:min-w-[392px] lg:pe-4">
                  <div className="bg-white sm:p-3 dark:bg-slate-900">
                    <div className="hidden absolute top-0 start-0 w-full h-full"></div>
                    <div className="js-resize cursor-ew-resize touch-none sr-only lg:not-sr-only lg:border-s lg:bg-gray-100 lg:absolute lg:inset-y-0 lg:end-0 lg:flex lg:items-center lg:w-4">
                      <div className="absolute inset-y-0 -inset-x-2"></div>
                      <svg className="h-4 w-4 text-gray-600 pointer-events-none" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62854 3.35999V12.36" stroke="currentColor" strokeLinecap="round"></path>
                        <path d="M10.6285 3.35999V12.36" stroke="currentColor" strokeLinecap="round"></path>
                      </svg>
                    </div>

                    <iframe className="w-full min-h-[575px]" srcDoc={`<!DOCTYPE html>
                      <html lang=&quot;en&quot; dir=&quot;&quot; className=&quot;relative min-h-full&quot;>
                      <head>
                      <meta charset=&quot;utf-8&quot;>
                      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot;>
                      <title>Preline UI</title>
                      <link rel=&quot;shortcut icon&quot; href=&quot;../favicon.ico&quot;>
                      <link href=&quot;https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap&quot; rel=&quot;stylesheet&quot;>
                      <link rel=&quot;stylesheet&quot; href=&quot;../assets/css/main.min.css&quot;>
                      </head>
                            
                      <body className=&quot;bg-slate-900&quot;>
                        <!-- Hero -->
                        <div className=&quot;bg-gradient-to-b from-violet-600/[.15] via-transparent&quot;>
                          <div className=&quot;max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8&quot;>
                            <!-- Announcement Banner -->
                            <div className=&quot;flex justify-center&quot;>
                              <a className=&quot;group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600&quot; href=&quot;../figma.html&quot;>
                                <p className=&quot;me-2 inline-block text-white text-sm&quot;>
                                  Preline UI Figma is live.
                                </p>
                                <span className=&quot;group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm&quot;>
                                  <svg className=&quot;flex-shrink-0 w-4 h-4&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; strokeLinecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><path d=&quot;m9 18 6-6-6-6&quot;/></svg>
                                </span>
                              </a>
                            </div>
                            <!-- End Announcement Banner -->

                            <!-- Title -->
                            <div className=&quot;max-w-3xl text-center mx-auto&quot;>
                              <h1 className=&quot;block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl&quot;>
                                Now it's easier than ever to build products
                              </h1>
                            </div>
                            <!-- End Title -->

                            <div className=&quot;max-w-3xl text-center mx-auto&quot;>
                              <p className=&quot;text-lg text-gray-400&quot;>Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                            </div>

                            <!-- Buttons -->
                            <div className=&quot;text-center&quot;>
                              <a className=&quot;inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800&quot; href=&quot;#&quot;>
                                Get started
                                <svg className=&quot;flex-shrink-0 w-4 h-4&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; strokeLinecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><path d=&quot;m9 18 6-6-6-6&quot;/></svg>
                              </a>
                            </div>
                            <!-- End Buttons -->
                          </div>
                        </div>
                        <!-- End Hero -->
                      <script src=&quot;../assets/vendor/preline/dist/index.js&quot;></script>
                      </body>`} >
                    </iframe>
                  </div>
                </div>
              </div>

            </div>
            

           
            <div id="ctc-component-center-aligned-in-dark-bg-tab-html" className="" role="tabpanel" aria-labelledby="ctc-component-center-aligned-in-dark-bg-tab-html-item">
              <div className="code-toolbar"><pre className=" rounded-lg language-markup"><code className=" language-markup" data-lang="html"><span className="token comment">&lt;!-- Hero --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>bg-slate-900<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>bg-gradient-to-b from-violet-600/[.15] via-transparent<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      <span className="token comment">&lt;!-- Announcement Banner --&gt;</span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>flex justify-center<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>../figma.html<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>me-2 inline-block text-white text-sm<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
            Preline UI Figma is live.
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>flex-shrink-0 w-4 h-4<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>16<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>16<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>0 0 16 16<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>none<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14<span className="token punctuation">"</span></span> <span className="token attr-name">stroke</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">stroke-width</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>2<span className="token punctuation">"</span></span> <span className="token attr-name">strokeLinecap</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>round<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
      <span className="token comment">&lt;!-- End Announcement Banner --&gt;</span>

      <span className="token comment">&lt;!-- Title --&gt;</span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>max-w-3xl text-center mx-auto<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h1</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
          Now it's easier than ever to build products
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h1</span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
      <span className="token comment">&lt;!-- End Title --&gt;</span>

      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>max-w-3xl text-center mx-auto<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-lg text-gray-400<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

      <span className="token comment">&lt;!-- Buttons --&gt;</span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-center<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
          Get started
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>flex-shrink-0 w-4 h-4<span className="token punctuation">"</span></span> <span className="token attr-name">xmlns</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>http://www.w3.org/2000/svg<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>0 0 24 24<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>none<span className="token punctuation">"</span></span> <span className="token attr-name">stroke</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">stroke-width</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>2<span className="token punctuation">"</span></span> <span className="token attr-name">strokeLinecap</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>round<span className="token punctuation">"</span></span> <span className="token attr-name">stroke-linejoin</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>round<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>m9 18 6-6-6-6<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
      <span className="token comment">&lt;!-- End Buttons --&gt;</span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token comment">&lt;!-- End Hero --&gt;</span></code></pre><div className="toolbar"><div className="toolbar-item"><a>Copy</a></div></div></div>
            </div>
           
          </div>
        </div>
       
      </div>
        </div>
        <div
          className="splitter__resizer"
          ref={resizerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
        <div className="splitter__second" ref={secondHalfRef}>
          Right
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" bg-bg-100 h-24 p-2 border border-accent-100 rounded-md col-span-5">
        {/* Botones para cambiar el tamaño del contenedor */}
        
        <button className="bg-accent-100" onClick={copyHTMLToClipboard}>Copiar HTML</button>
        <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
</button>
<button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light">
  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8a2 2 0 1 0 4 4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
</button>


      </div>
      <div className="h-full flex justify-center items-center bg-bg-100 rounded-lg border border-accent-100 p-4">
        {/* Mostrar el contenido del componente dentro del iframe */}
        <Splitter />
      </div>
    </>
  );
}

export default ejemplo;