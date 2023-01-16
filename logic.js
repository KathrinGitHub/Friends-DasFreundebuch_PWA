/*
AUTHORS: Kathrin Hubmann & Sebastian Kurka
DESCRIPTION: A digital friends book. 
LAST CHANGE: 15.01.2023
*/

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
});

var items = document.getElementsByClassName('item');

for(var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        var id = this.id;
        parent.location.href = 'profile.html';
    });
}

