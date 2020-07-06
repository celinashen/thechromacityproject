

const colorArray = require("./primary");

/**function downloadSVG(filename) {
    getElementsByTagName('svg')[0].setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    var filename = "palette.svg"
    const svg = document.getElementById('drawing').innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "w3c.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();

    for (i = 0; i < colorArray.length; i++){
      var shape = palette.createElementNS(svgns, "circle");
      shape.setAttributeNS(colorArray[0]);
    }

    //palette.svg();

}

**/

function createPalette(){

  // create the svg element
  const svg1 = document. createElementNS("http://www.w3.org/2000/svg", "svg");

  svg1.setAttribute("width", "100");
  svg1.setAttribute("height", "100");

  for (i = 0; i < colorArray.length; i++){
    var shape = palette.createElementNS(svgns, "circle");
    shape.setAttributeNS(colorArray[i]);
  }

  return svg1;
}


function download(){
  
  var dl = document.createElement("a");
  document.body.appendChild(dl); // This line makes it work in Firefox.
  dl.setAttribute("href", dataURL);
  dl.setAttribute("download", "palette.svg");
  dl.click();
}




