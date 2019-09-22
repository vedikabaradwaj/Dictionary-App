var apikey="1c026b6fbabe258547cc70e1ff7f2d1e"
var baseUrl="https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/"
var inputbox=document.getElementById("input-box");
var apiID="ef6ddc24"
function getDefinition(){
    fetch(baseUrl+inputbox.value,{
        headers:{
            "app_id": apiID,
            "app_key":apikey,
            "Accept":"application/json"
        },
        mode:'no-cors',
        credentials: "include",
        method: "GET"
    }).then(function(data){
        console.log(data)
    })
}