import { useParams } from "@remix-run/react";
import React, { useState } from "react";
import { TbCopy, TbCode, TbArrowBigLeftLinesFilled } from "react-icons/tb";

const datos = [
  {
    id: "1",
    nombre: "Avatar Card",
    html: `
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white">
    <img class="w-full" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" alt="Avatar" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Usuario</div>
      <p class="text-gray-700 dark:text-gray-300 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">#ux</span>
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">#ui</span>
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white">#web</span>
    </div>
  </div>
  `,
  },
  {
    id: "2",
    nombre: "Componente 2",
    html: `
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->`,
  },
  {
    id: "3",
    nombre: "Componente 3",
    html: `<!-- Bloque -->
<div class="flex flex-wrap justify-center">
  <div class="max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
    <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/400x250" alt="Card image">
    <div class="px-6 py-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 1 Title</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

  <div class="max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
    <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/400x250" alt="Card image">
    <div class="px-6 py-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 2 Title</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

  <div class="max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
    <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/400x250" alt="Card image">
    <div class="px-6 py-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 3 Title</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
<!-- Fin bloque -->`,
  },
  {
    id: "4",
    nombre: "Componente 3",
    html: `<!-- Bloque -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
    <!-- Card 1 -->
    <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>
  
    <!-- Card 2 -->
    <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>
  
    <!-- Card 3 -->
    <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
    <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
    <div class="">
        <p class="font-extrabold">Card title</p>
        <p class="">4 popular types of cards in UI design.</p>
    </div>
    <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
  </div>
  </div>
  
<!-- Fin bloque -->`,
  },
  {
    id: "5",
    nombre: "Card skeleton",
    html: `  <div class="mx-auto flex w-96 flex-col justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
    <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" />
    <div class="p-4">
      <p class="text-blue-400 text-xs">Web developer</small>
      <h1 class="text-2xl font-medium text-slate-600 pb-1">Javier Roca</h1>
      <p class="text-sm tracking-tight font-light text-slate-400">Building the future one web at a time</p>
    </div>
  </div>`,
  },
  {
    id: "6",
    nombre: "Skeleton card",
    html: `
    <div class="mx-auto px-5">
      <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 dark:bg-gray-800">
        <img class="w-64 h-40 animate-pulse rounded-lg object-cover object-center mb-6 bg-gray-300 dark:bg-gray-500" src="" alt="img" />
        <p class="w-full h-6 my-4 pl-4   animate-pulse bg-gray-300 dark:bg-gray-500"></p>
        <p class="w-44 h-4   animate-pulse bg-gray-300 dark:bg-gray-500"></p>
      </div>
    </div>
 `,
  },
  {
    id: "7",
    nombre: "Skeleton card",
    html: `
    <div class="mx-auto px-5">
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 dark:bg-gray-800">
      <img class="mb-2 h-40 w-full rounded-lg bg-gray-300 object-cover object-center dark:bg-gray-500" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" alt="img" />
      <p class="text-xl text-gray-900 dark:text-gray-500">Javier Roca</p>
      <p class="text-xs italic text-gray-300 dark:text-gray-500">Web developer</p>
    </div>
  </div>
 `,
  },
  {
    id: "8",
    nombre: "Skeleton card",
    html: `
    <div class="mx-auto px-5">
  <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 dark:bg-gray-800">
    <img class="mb-2 h-40 w-full rounded-lg bg-gray-300 object-cover object-center dark:bg-gray-500" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" alt="img" />
    <p class="text-xl text-gray-900 dark:text-gray-500">Javier Roca</p>
    <p class="text-xs italic text-gray-300 dark:text-gray-500">Web developer</p>
  </div>
</div>
 `,
  },
  {
    id: "99999",
    nombre: "Componente 3",
    html: ``,
  },
];

function ComponentsComponentId() {
  const { componentId } = useParams();
  const [showCode, setShowCode] = useState(false);
  // Encontrar el componente según el ID
  const componente = datos.find((item) => item.id === componentId);

  // Verificar si se encontró el componente
  if (!componente) {
    return <div>No se encontró el componente con el ID {componentId}</div>;
  }

  const copyHTMLToClipboard = () => {
    const htmlToCopy = componente.html;
    navigator.clipboard
      .writeText(htmlToCopy)
      .then(() => {
        alert("HTML copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar HTML al portapapeles:", error);
        alert("Error al copiar HTML al portapapeles");
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
      // <div className="splitter" ref={containerRef}>
      //   <div className="splitter__first" ref={firstHalfRef}>
      //   {showCode ? (
      //     <p>
      //     <pre className=" bg-blue-500"><code  className="flex flex-wrap bg-red-500 shrink-1">
      //       {componente.html}

      //     </code></pre>
      //     {/* <p>hoam lasdlf asdof asdfja sdfa sdflasd fasldhfoentnoea f lalfa dfadpaosdnfalsd ofoosdf aetañelrt añsdlfnañsoldfj aerudlfhalksedjsrh aldf vadyfjpaoeurhfñadl odt ag </p> */}
      //     </p>
      //   ) : (
      //   <iframe

      //       title={`Componente ${componente.id}`}
      //       // className="bg-red-500"
      //       // srcDoc={componente.html}
      //       srcDoc={`<!DOCTYPE html>
      //       <html>
      //       <head>
      //         <meta charset="utf-8">
      //         <meta name="viewport" content="width-device-width, initial-scale=1.0">
      //         <script src="https://cdn.tailwindcss.com"></script>
      //         <script>
      //           tailwind.config = {
      //             darkMode: 'class',
      //           }

      //           function toggleMode() {
      //             const body = document.body;
      //             body.classList.toggle('light');
      //             body.classList.toggle('dark');

      //             // Obtiene el botón
      //             const button = document.getElementById('modeToggleButton');
      //             // Cambia el texto del botón según el modo actual
      //             if (body.classList.contains('light')) {
      //               button.textContent = 'Dark Mode';
      //             } else {
      //               button.textContent = 'Light Mode';
      //             }
      //           }
      //         </script>
      //       </head>
      //       <body class="light">
      //         <main class="bg-white h-full sm:h-screen flex justify-center items-start md:items-center dark:bg-slate-600">
      //           <!-- Aquí se incluirá el contenido del componente -->
      //           ${componente.html}
      //           <button id="modeToggleButton" onclick="toggleMode()" class="p-2 rounded absolute top-2 right-2 border border-[#71c4ef]">Dark Mode</button>
      //         </main>
      //       </body>
      //       </html>

      //       `}
      //       className="h-full w-full flex justify-center items-center  rounded-l-xl "
      //     />)}
      //   </div>
      //   <div
      //     className="splitter__resizer"
      //     ref={resizerRef}
      //     onMouseDown={handleMouseDown}
      //     onTouchStart={handleTouchStart}
      //   />
      //   <div className="splitter__second" ref={secondHalfRef}>
      //     flecha
      //   </div>
      // </div>

      <>
        {showCode ? (
          // h-full flex justify-center items-center bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4
          <pre className="bg-white  p-2 rounded-xl border border-accent-200 flex items-start overflow-scroll [width:_calc(100vw_-258px)!important;] [height:calc(100vh-170px)_!important]">
            {/* <code  className=" bg-red-500 ">
          {componente.html}
        </code> */}

            {componente.html}
          </pre>
        ) : (
          <div className="splitter" ref={containerRef}>
            <div className="splitter__first" ref={firstHalfRef}>
              <iframe
                title={`Componente ${componente.id}`}
                // className="bg-red-500"
                // srcDoc={componente.html}
                srcDoc={`<!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width-device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com"></script>
              <script>
                tailwind.config = {
                  darkMode: 'class',
                }
            
                function toggleMode() {
                  const body = document.body;
                  body.classList.toggle('light');
                  body.classList.toggle('dark');
            
                  // Obtiene el botón
                  const button = document.getElementById('modeToggleButton');
                  // Cambia el texto del botón según el modo actual
                  if (body.classList.contains('light')) {
                    button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>';
                  } else {
                    button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path><path d="M6.343 17.657l-1.414 1.414"></path><path d="M6.343 6.343l-1.414 -1.414"></path><path d="M17.657 6.343l1.414 -1.414"></path><path d="M17.657 17.657l1.414 1.414"></path><path d="M4 12h-2"></path><path d="M12 4v-2"></path><path d="M20 12h2"></path><path d="M12 20v2"></path></svg>';
                  }
                }
              </script>
            </head>
            <body class="light">
              <main class="bg-white h-full sm:h-screen flex justify-center items-start md:items-center dark:bg-slate-600">
                <!-- Aquí se incluirá el contenido del componente -->
                ${componente.html} 
                <button id="modeToggleButton" onclick="toggleMode()" class="p-2 rounded absolute top-2 right-2 border border-[#71c4ef] bg-[#f5f4f1]"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg></button>
              </main>
            </body>
            </html>
            
            `}
                className="h-full w-full flex justify-center items-center  rounded-l-xl "
              />
            </div>
            <div
              className="splitter__resizer"
              ref={resizerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            />
            <div className="splitter__second" ref={secondHalfRef}>
            <TbArrowBigLeftLinesFilled  className=" text-accent-200 w-8 h-8  dark:bg-text-200 rounded-full p-1   mr-1 group-hover:bg-accent-100" />
            </div>
          </div>
        )}
      </>
    );
  };
  const toggleView = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <div className="border rounded-lg shrink-0 bg-bg-200 dark:bg-primary-100 border-accent-200 dark:border-text-200 h-52 md:h-24 p-2  col-span-5 flex md:flex-row flex-col items-center justify-between px-4">
        {/* Botones para cambiar el tamaño del contenedor */}

        <p className="font-bold p-2 md:hidden  lg:block block lg:text-2xl text-accent-200 dark:text-text-100">
          {componente.nombre}
        </p>
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
          <button
            className="flex gap-1  bg-bg-100 p-2 rounded-full justify-center items-center"
            onClick={copyHTMLToClipboard}
          >
            <TbCopy className="flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200 rounded-full p-1 stroke-bg-100  mr-1 group-hover:bg-accent-100" />
            <p className="font-bold text-accent-200 dark:text-text-100">Copy</p>
          </button>
          <button
            className="flex gap-1 bg-bg-100 p-2 rounded-full justify-center items-center"
            onClick={toggleView}
          >
            <TbCode className="flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200 rounded-full p-1 stroke-bg-100  mr-1 group-hover:bg-accent-100" />
            <p className="font-bold text-accent-200 dark:text-text-100">
              Show/Hide code
            </p>
          </button>
          <a
            className="w-full md:w-fit px-4 py-2.5 text-bg-100 font-sans flex items-center gap-2 border-none rounded-full text-base  font-semibold transition-colors duration-200 [background:_linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb);] text-offwhite cursor-pointer lg:flex button--create h-[42px] relative overflow-visible"
            href="https://uiverse.io"
          >
            {" "}
            Need more...
          </a>
        </div>
      </div>
      <div className="h-full flex justify-center items-center bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4">
        {/* <div className="h-full flex items-start justify-start bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4"> */}
        {/* <div className="h-full  flex justify-center items-start overflow-scroll bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4"> */}
        {/* Mostrar el contenido del componente dentro del iframe */}
        <Splitter />
      </div>
    </>
  );
}

export default ComponentsComponentId;
