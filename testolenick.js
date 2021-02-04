function UsejQuery()
{
  var url = "https://www.olenick.com/";
  Browsers.Item(btIExplorer).Run(url);
  var page = Sys.Browser().Page(url);

  page.contentDocument.Script.$(".container").hide();
}

//JSDOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var links = document.querySelectorAll("a");
var links = driver.findElements(By.css(a));
var linkReport = [];
var linksChecked=0;
links.forEach(function(link){
    var http = new XMLHttpRequest();
    var reportLine = {url: link.getAttribute('href'), status:0, message : "", element : link};

        http.open('HEAD', reportLine.url);
        linkReport.push(reportLine);
                    
        http.onreadystatechange = (function(line,xhttp) {
            return function(){
                if (xhttp.readyState == xhttp.DONE) {
                line.status = xhttp.status;
                linksChecked++;
                line.message = xhttp.responseText + xhttp.statusText;
                console.table(xhttp);
                }
            }
        })(reportLine, http);
            http.send();
});
var finishReport = setInterval(
        function(){
            if(linksChecked>=linkReport.length){
            console.table(linkReport);
            clearInterval(finishReport);
            }
        }
, 3000);
