let dolog = function(msg) {
    chrome.extension.getBackgroundPage().console.log(msg);
    // chrome.tabs.executeScript({ code: 'console.log("xhr onload called")' });
}

let tryload = function(site) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.onload = function(a) {
            dolog("xhr onload called");
            dolog(this);
            dolog("responseText: " + xhr.responseText);
            dolog(a);
        };
        xhr.onerror = function(a) {
            dolog("xhr onerror");
            dolog(a);
        };

        xhr.onabort = function(a, b) {
            dolog("xhr onabort");
            dolog(a);
            dolog(b);
        };
        dolog('loading site: ' + site);
        xhr.open("GET", site);
        xhr.send();
    } catch (error) {
        dolog("caught from popup code: ");
        dolog(error);
    }
};
document.getElementById('button1').onclick = function(el) {
    dolog("button1 - loading veracode");
    tryload('https://www.veracode.com');
};
document.getElementById('button2').onclick = function(el) {
    dolog("button2 - loading example");
    tryload('https://www.example.com');
}
