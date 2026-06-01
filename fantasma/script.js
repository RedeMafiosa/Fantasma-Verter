function startConversion() {
    const file = document.getElementById("fileInput").files[0];
    const url = document.getElementById("urlInput").value.trim();
    const format = document.getElementById("format").value;

    const bar = document.getElementById("bar");
    const status = document.getElementById("status");

    if (!file && !url) {
        alert("Escolhe ficheiro ou cola link!");
        return;
    }

    let progress = 0;
    bar.style.width = "0%";
    status.innerText = "A iniciar...";

    const interval = setInterval(() => {

        if (progress < 30) {
            status.innerText = "A analisar...";
        } else if (progress < 70) {
            status.innerText = "A converter para " + format + "...";
        } else {
            status.innerText = "A finalizar...";
        }

        progress += 2;
        bar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            status.innerText = "✔ Concluído";

            console.log("Ficheiro:", file ? file.name : "nenhum");
            console.log("URL:", url || "nenhum");
            console.log("Formato:", format);
        }

    }, 60);
}