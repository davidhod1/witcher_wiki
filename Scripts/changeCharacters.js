var images = ["Characters","Geralt", "Yennefer", "Ciri", "Vesemir", "Lambert", "Eskel", "Dandelion"]
  var imgArray = new Array();
  
  var i, tabcontent, tablinks;


function openCharacter(evt, cityName) {

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    for(var i = 0; i<images.length; i++){
      if(images[i]==cityName){
        document.getElementById("imgBackground").style.backgroundImage = 'url(../Images/'+images[i]+'.png)';
        break;
      }
    }
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("firstTab").click();
 