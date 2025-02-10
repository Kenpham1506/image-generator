function generateImage() {
    let seed = document.getElementById("seedInput").value || "default";
    Math.seedrandom(seed);

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 256;
    canvas.height = 256;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            let color = Math.floor(Math.random() * 255);
            ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Generate an initial image
generateImage();
