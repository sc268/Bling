
    var url = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=30&mkt`;
    xhttp = new XMLHttpRequest();    
    xhttp.open("GET", url, true);
    xhttp.onload = function(){
        var res =  JSON.parse(xhttp.responseText);
        var max = Object.keys(res.images).length;
        var i = Math.floor(Math.random() * (max));
        var imageUrl = "https://bing.com" + res.images[i].url;
        var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(' + imageUrl + ')'; 
        console.log(max, i, xhttp.responseText, imageUrl)
    }
    xhttp.send();


 