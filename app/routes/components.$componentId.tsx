import { useParams } from "@remix-run/react";
import React from "react";

const datos = [
  {
    id: "1",
    nombre: "Componente 1",
    html: `
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://via.placeholder.com/150" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mountain</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#sunset</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#nature</span>
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
];

function ComponentsComponentId() {
  const { componentId } = useParams();

  // Encontrar el componente según el ID
  const componente = datos.find((item) => item.id === componentId);

  // Verificar si se encontró el componente
  if (!componente) {
    return <div>No se encontró el componente con el ID {componentId}</div>;
  }

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
                    button.textContent = 'Dark Mode';
                  } else {
                    button.textContent = 'Light Mode';
                  }
                }
              </script>
            </head>
            <body class="light">
              <main class="bg-white h-full sm:h-screen flex justify-center items-start md:items-center dark:bg-slate-600">
                <!-- Aquí se incluirá el contenido del componente -->
                ${componente.html} 
                <button id="modeToggleButton" onclick="toggleMode()" class="p-2 rounded absolute top-2 right-2 border border-[#71c4ef]">Dark Mode</button>
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
          flecha
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="border rounded-lg bg-bg-200 dark:bg-primary-100 border-accent-200 dark:border-text-200 h-24 p-2  col-span-5">
        {/* Botones para cambiar el tamaño del contenedor */}
        <p>El ID : {componentId}</p>
        <a className="w-40 px-4 py-2.5 text-bg-100 font-sans flex items-center gap-2 border-none rounded-full text-base  font-semibold transition-colors duration-200 [background:_linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb);] text-offwhite cursor-pointer lg:flex button--create h-[42px] relative overflow-visible" href="https://uiverse.io"> Need more...</a>
        <button className="bg-accent-100" onClick={copyHTMLToClipboard}>Copiar HTML</button>



      </div>
      <div className="h-full flex justify-center items-center bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4">
        {/* Mostrar el contenido del componente dentro del iframe */}
        <Splitter />
      </div>
    </>
  );
}

export default ComponentsComponentId;