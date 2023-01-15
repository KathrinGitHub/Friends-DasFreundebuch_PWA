/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: The following code detects if the PWA is launched as an app or visited as a website.
SOURCE: https://stackoverflow.com/questions/50543163/can-i-detect-if-my-pwa-is-launched-as-an-app-or-visited-as-a-website
LAST CHANGE: 17.12.2022
*/

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if 'install popup notification' should be displayed
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}

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
        parent.location.href = 'next.html';
    });
}

