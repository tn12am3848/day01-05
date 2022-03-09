var req = new XMLHttpRequest();
req.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
req.send();
req.onload = function(){
    var temp = JSON.parse(req.response);
    console.log(temp)
    for(var i=0; i<temp.length; i++){
        console.log("name: "+temp[i].name," -flag: "+temp[i].flag," -region: "+temp[i].region," -subregion: "+temp[i].subregion," -population: "+temp[i].population);
    }
}

