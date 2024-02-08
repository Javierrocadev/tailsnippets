import { Outlet, useParams } from "@remix-run/react";

const datos = [
    { id: "1", nombre: "Componente 1", html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- Incluye los estilos de Tailwind CSS -->
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-blue-400 h-screen flex justify-center items-center">
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
    </body>
    </html>
  ` },
    { id: "2", nombre: "Componente 2", html: "<div><h2>Contenido del componente 2</h2></div>" },
    { id: "3", nombre: "Componente 3", html: "<span>Contenido del componente 3</span>" },
];

function ComponentsComponentId() {
    const { componentId } = useParams();

    // Encontrar el componente según el ID
    const componente = datos.find(item => item.id === componentId);

    // Verificar si se encontró el componente
    if (!componente) {
        return <div>No se encontró el componente con el ID {componentId}</div>;
    }

    return (
        <>
            <div className=" bg-bg-100 h-24 p-2 border border-accent-100 rounded-md col-span-5">
                {/* Botones para cambiar el tamaño del contenedor */}
                <p>El ID : {componentId}</p>
            </div>
            <div className="h-full flex justify-center items-center bg-bg-100 rounded-lg border border-accent-100 p-4">
                {/* Mostrar el contenido del componente dentro del iframe */}
                <iframe
                    title={`Componente ${componente.id}`}
                    srcDoc={componente.html}
                    className="h-full w-full flex justify-center items-center bg-red-800 rounded-lg border border-accent-100 p-4"
                />
            </div>
        </>
    );
}

export default ComponentsComponentId;

