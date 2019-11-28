window.onload = function() {
var search = document.getElementById("search");

search.addEventListener("click", function(event){
    event.preventDefault();
    var inputString = document.getElementById("input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","superheroes.php?q="+inputString,true);
    xhr.onload = function(){
        if(this.status == 200){
            var superhero = JSON.parse(this.response)
            document.getElementById("alias").innerHTML = superhero.alias;
            document.getElementById("name").innerHTML = superhero.name;
            document.getElementById("description").innerHTML = superhero.biography;
            
        }
    }
    xhr.send();
})
}