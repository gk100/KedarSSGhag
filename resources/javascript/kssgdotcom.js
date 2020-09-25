function openTab(evt, tabNum) {
    //variable declaration
    var i, k1tabcontent, k1tablinks
    //get elements with class name 'k1_tabcontent' and hide them
    k1tabcontent = document.getElementsByClassName("K1_tabcontent");
    for (i = 0; i < k1tabcontent.length; i++) {
        k1tabcontent[i].style.display = "none";
    }
    //get elements with class="k1_tablink" and remove "active" class
    k1tablinks = document.getElementsByClassName("K1_tablinks");
    for (i = 0; i < k1tablinks.length; i++) {
        k1tablinks[i].className = k1tablinks[i].className.replace("active", "");
    }
    //Show current/active tab
    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className = "active";
    }
    //get elements with id "defaultOpen" and click on it
    document.getElementById("defaultOpen").click()