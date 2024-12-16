var link = document.getElementById('link'); 


    window.onload = function() {
        const loginStatus = localStorage.getItem("storageName");
        var user = document.getElementById("User");
        if (loginStatus === "true") {
            user.innerHTML = `Studente`;
            if (link) { 
                link.href = "#";
            }
        } else {
            user.innerHTML = `Accedi`;
        }
    }