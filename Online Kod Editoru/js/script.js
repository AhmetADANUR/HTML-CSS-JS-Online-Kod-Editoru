function updateOutput() {
    const html = document.getElementById('html-code').value;
    const css = document.getElementById('css-code').value;
    const js = document.getElementById('js-code').value;

    const iframe = document.getElementById('output-frame');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `);
    iframeDoc.close();
}

document.getElementById('html-code').addEventListener('input', updateOutput);
document.getElementById('css-code').addEventListener('input', updateOutput);
document.getElementById('js-code').addEventListener('input', updateOutput);

window.onload = updateOutput;
