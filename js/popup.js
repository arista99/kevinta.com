var modal = document.getElementById('popUp');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

