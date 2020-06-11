
function downloadButton(e) {

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

    var button_id = "downloadsvg"
  
    // include this code in your page
    // you must have jQuery installed
    // you must have a link element with an id of "download"
    // this is limited to only one chart on the page (the first)
    function encode_as_link(){
      // Add some critical information
   
      $("svg").attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});
  
      var svg = $("svg").parent().html(),
        b64 = Base64.encode(svg),
        download = $("#download"),
        html = download.html();
  
      download.replaceWith(
        $("<a id='"+button_id+"' href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"'></a>").html(html));
    }
  
    $(function(){
      $("div").delegate("#"+button_id, "mouseover", encode_as_link);
    });
  
  };