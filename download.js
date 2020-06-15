


function downloadSVG(filename) {
    getElementsByTagName('svg')[0].setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    var filename = "palette.svg"
    const svg = document.getElementById('drawing').innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "w3c.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
}



