/*
AUTHORS: Kathrin Hubmann & Sebastian Kurka
DESCRIPTION: A digital friends book. 
LAST CHANGE: 15.01.2023
*/

// handles the floating action buttons
try {
    var fab = document.getElementById('moreBtn');
    var fabImg = document.getElementById('more');

    fab.addEventListener('click', function() {
        var fabShare = document.getElementById('shareBtn');
        var fabAdd = document.getElementById('addBtn');

        var visibility = window.getComputedStyle(fabShare).getPropertyValue('visibility');

        if(visibility == 'collapse') {
            fabShare.style.visibility = 'visible';
            fabAdd.style.visibility = 'visible';
            fabImg.src = 'img/down_icon.png';
        } else if(visibility == 'visible') {
            fabShare.style.visibility = 'collapse';
            fabAdd.style.visibility = 'collapse';
            fabImg.src = 'img/more_icon.png';
        }

        fabAdd.addEventListener('click', function() {
            parent.location.href = 'commingSoon.html';
        });

        fabShare.addEventListener('click', function() {
            parent.location.href = 'qrcode.html';
        });
    });
} catch (error) {
    
}


// handles clicking on a friend
var items = document.getElementsByClassName('item');

for(var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        var name = this.getElementsByClassName('name')[0].innerHTML;
        window.location.href = 'profile.html';
        sessionStorage.setItem("name", name);
    });
}

// set name
try {
    var profileName = document.getElementById('name');
    profileName.innerHTML = sessionStorage.getItem("name");
} catch (error) {
    
}


