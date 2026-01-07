// fetchRandomColor(searchQuery) Paleta de ColorMagic
function fetchPalette(searchQuery) {

    const q = searchQuery || "";
    const apiUrl = "https://colormagic.app/api/palette/search?q=" + encodeURIComponent(q);

    const $contenedor = $("#contenedor");
    const $info = $("#info");
    $contenedor.empty();
    $info.html("<p>Cargando colores...</p>").show();

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) throw new Error("Error al obtener paleta");
        return response.json();
    })
    .then(data => {
        let palette = [];

        if (Array.isArray(data)) {
            if (data.length > 0) {
                const first = data[0];
                if (Array.isArray(first)) palette = first;
                else if (first.colors) palette = first.colors;
                else if (first.palette) palette = first.palette;
            }
        } else if (data && typeof data === 'object') {
            if (Array.isArray(data.result)) palette = data.result;
            else if (Array.isArray(data.colors)) palette = data.colors;
            else if (Array.isArray(data.palette)) palette = data.palette;
            else if (Array.isArray(data.palettes) && data.palettes[0] && Array.isArray(data.palettes[0].colors)) palette = data.palettes[0].colors;
            else if (Array.isArray(data.items) && data.items[0] && Array.isArray(data.items[0].colors)) palette = data.items[0].colors;
        }

        if (!palette || palette.length === 0) {
            $contenedor.append('<p>No se recibió paleta válida.</p>');
            return;
        }

        // Selección de la primera opción válida
        let colors = palette;
        if (Array.isArray(palette[0]) && !Array.isArray(palette[0][0])) {
            colors = palette;
        } else if (Array.isArray(palette[0]) && Array.isArray(palette[0][0])) {
            colors = palette[0];
        }

        colors.forEach(col => {
            let colorStr = null;
            if (Array.isArray(col) && col.length >= 3 && typeof col[0] === 'number') {
                colorStr = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
            } else if (typeof col === 'string') {
                if (col.startsWith('#') || col.startsWith('rgb')) colorStr = col;
                else colorStr = '#' + col.replace(/^#?/, '');
            }
            if (!colorStr) return;

            const figura = `
                <figure>
                    <div style="width:120px;height:80px;background:${colorStr};border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
                    <figcaption>
                        <p style="margin:6px 0 0;font-family:monospace;">${colorStr}</p>
                    </figcaption>
                </figure>
            `;
            $contenedor.append(figura);
        });
    })
    .catch(error => {
        console.warn("Error al obtener colores: ", error.message);
        // Si el Fetch falla, genera colores aleatorios
        function randomHex() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        }
        const fallback = Array.from({ length: 5 }, () => randomHex());
        const $contenedor = $("#contenedor");
        $contenedor.empty();
        fallback.forEach(hex => {
            const figura = `
                <figure>
                    <div style="width:120px;height:80px;background:${hex};border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
                    <figcaption>
                        <p style="margin:6px 0 0;font-family:monospace;">${hex}</p>
                    </figcaption>
                </figure>
            `;
            $contenedor.append(figura);
        });
    })
    .finally(() => {
        $info.hide();
    });
}


$(document).ready(function () {
    // Solicita una paleta de colores
    fetchPalette();
});
			