
window.onload=function(){

  var timeline=document.getElementById('mama');
  var alltimeline = document.createElement('div');
  alltimeline.innerHTML = timeline.innerHTML;
  for(var i=0; i<6; i++)
  {
    timeline.innerHTML += alltimeline.innerHTML;
  }
}

      // var find = document.getElementById('fo');
      //
      // find.onclick = function() {
      //   find.style.textAlign="left";
      //   find.background-color= "white";
      // }

function modalopen() {
  var modal = document.getElementById("mymodal");
  var span = document.getElementsByClassName("close1")[0];
  var cancel=document.getElementsByClassName("modalbu")[0];

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  cancel.onclick=function(){
    modal.style.display="none";
  }
}
