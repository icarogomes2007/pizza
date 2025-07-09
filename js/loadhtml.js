document.addEventListener("DOMContentLoaded", () => {
    // Load just the <header> content from header.html
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const header = doc.querySelector("header");
            if (header) {
                document.querySelector("header").innerHTML = header.innerHTML;
            }
        })
        .catch(error => console.error("Error loading header:", error));

    // Load just the <nav> content from nav.html
    fetch("nav.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const nav = doc.querySelector("nav");
            if (nav) {
                document.querySelector("nav").innerHTML = nav.innerHTML;
            }
        })
        .catch(error => console.error("Error loading nav:", error));
});