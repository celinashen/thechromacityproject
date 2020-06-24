var $picked = $("#picked"); // Just to preview picked colors
var canvas = $('#canvas_picker')[0];
var context = canvas.getContext('2d');

var colorArray = []; 


$("#file_upload").change(function (e) {
    var F = this.files[0];
    var reader = new FileReader();
    reader.onload = imageIsLoaded;
    reader.readAsDataURL(F);
});

function imageIsLoaded(e) {
    var img = new Image();
    img.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this, 0, 0);
    };
    img.src = e.target.result;
}

$('#canvas_picker').click(function (event) {
    var x = event.pageX - $(this).offset().left;
    var y = event.pageY - $(this).offset().top;
    var img_data = context.getImageData(x, y, 1, 1).data;
    var R = img_data[0];
    var G = img_data[1];
    var B = img_data[2];
    var rgb = R + ',' + G + ',' + B;
    var hex = rgbToHex(R, G, B);
    $('#rgb input').val(rgb);
    $('#hex input').val('#' + hex);
    $picked.append("<span class='ch' style='background:#" + hex + "'>#" + hex + " & " + rgb + "</span>");

    var colorObject = { rgbVal: rgb, hexValue: hex };
    colorArray.push(colorObject);
});

function objectReveal() {
    var i;
    var arrayText = " ";

    if (colorArray.length === 0) {
        arrayText = "No Objects";
    }
    if (colorArray.length !== 0) {
        arrayText = arrayText + "#" + colorArray[0].hexValue;

        for (i = 1; i < colorArray.length; i++) {
            arrayText = arrayText + " &amp; " + "#" + colorArray[i].hexValue;
        }
        document.getElementById("target-id").innerHTML = arrayText;
    }
}

function rgbToHex(R, G, B) {
    return partToHex(R) + partToHex(G) + partToHex(B);
}

function partToHex(n) {
    var hex = n.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

document.getElementById("picked").addEventListener("click", function (e) {
    var ch = e.target;
    
    if (ch) {
        var spanText = ch.textContent; 
        ch.parentNode.removeChild(ch);

        var subString = spanText.substr(1, 6);
        var index = colorArray.findIndex(x => x.hexValue === subString);
        if (index !== -1) {
            colorArray.splice(index, 1);
        }
        //document.write(spanText);
        //document.write(subString);
        //document.write("INDEX:"+index);
    }
}, false);
