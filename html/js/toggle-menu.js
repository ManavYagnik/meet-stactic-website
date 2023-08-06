function togogle_menu() {
    var menulist = document.getElementById("menuList");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    if (menulist.style.display === "block") {
        menulist.style.display = "none";
        line2.style.display = "block" ;
        line1.style.transform="rotate(0deg)";
        line3.style.transform="rotate(0deg)";
    } else {
        menulist.style.display = "block";
        line2.style.display = "none" ;
        line1.style.transform="rotate(47deg)";
        line3.style.transform="rotate(-47deg)";
        

    }
    
  }

  window.onresize = function() {
    if (screen.width>800){
        console.log(screen.width);
        var menulist = document.getElementById("menuList");

    menulist.style.display = "flex";}
    if (screen.width<800){
       

        var menulist = document.getElementById("menuList");

        menulist.style.display = "none";
        

    }
          
    
};


