function setup() {
  
 var button = select("#searchButton");
  
 button.mousePressed(wikiSearch);
  
}

function wikiSearch() {
    
var urlInput = document.getElementById("searchString").value;

$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&list=search&srsearch=" + urlInput + "&callback=?", function(data) { 
 
  var title = data.query.search[0].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[0].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult1").innerHTML = result;
    
  
  var title = data.query.search[1].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[1].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult2").innerHTML = result;
  
  
  var title = data.query.search[2].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[2].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult3").innerHTML = result;
  
  
  var title = data.query.search[3].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[3].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult4").innerHTML = result;
  
  
  var title = data.query.search[4].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[4].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult5").innerHTML = result;
  
  
  var title = data.query.search[5].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[5].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult6").innerHTML = result;
  
  
  var title = data.query.search[6].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[6].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult7").innerHTML = result;
  
  
  var title = data.query.search[7].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[7].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult8").innerHTML = result;

  
  var title = data.query.search[8].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[8].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult9").innerHTML = result;
  
  
  var title = data.query.search[9].title;
  var array = title.split(" ");
  var linkAddon = array.join("_");
  var titleLinked = title.link("https://en.wikipedia.org/wiki/" + linkAddon);
  var titleBold = titleLinked.bold();
  var snippet = data.query.search[9].snippet;
  var result = titleBold + "<br>" + snippet;
  
  document.getElementById("showResult10").innerHTML = result; 
   
});
}

function showResults() {
    document.getElementById("showResult1").style.display = "block";
    document.getElementById("showResult2").style.display = "block";
    document.getElementById("showResult3").style.display = "block";
    document.getElementById("showResult4").style.display = "block";
    document.getElementById("showResult5").style.display = "block";
    document.getElementById("showResult6").style.display = "block";
    document.getElementById("showResult7").style.display = "block";
    document.getElementById("showResult8").style.display = "block";
    document.getElementById("showResult9").style.display = "block";
}

