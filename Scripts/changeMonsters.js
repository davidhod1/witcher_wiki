function openMonster(evt, cityName) {

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
    if(cityName == "Bestiary"){
      document.getElementById("imgBackground").style.backgroundImage = "url('../Images/monsters.jpg')";
    }
    else{
      document.getElementById("imgBackground").style.backgroundImage ="none";
    }

  }
  

  document.getElementById("firstTab").click();