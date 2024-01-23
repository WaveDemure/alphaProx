self.__protocoller$config = {
    protocol: 'proxy',
    suffix: '://',
    helpURI: 'help',
    helpFile: './proto/files/help.html',
    otherURIs: ['games']
};

function test() {
    var ier = document.getElementById("address").value.replace(__protocoller$config.protocol+__protocoller$config.suffix, '');
    if (ier.includes(__protocoller$config.helpURI)) {
        var ifr = document.createElement("iframe");
        ifr.style.position = "absolute";
        ifr.style.left = "0px";
        ifr.style.top = "0px";
        ifr.style.width = '100%';
        ifr.style.height = '100%';
        ifr.style.border = "none";
        document.body.appendChild(ifr)
        ifr.src = __protocoller$config.helpFile
    } else if (ier.includes(__protocoller$config.otherURIs)) {
        var includedURI = __protocoller$config.otherURIs.find(uri => ier.includes(uri));
        if (!ifr) {
            var ifr = document.createElement("iframe");
            ifr.style.position = "absolute";
            ifr.style.left = "0px";
            ifr.style.top = "0px";
            ifr.style.width = '100%';
            ifr.style.height = '100%';
            ifr.style.border = "none";
            document.body.appendChild(ifr)
        }

        ifr.src = "./proto/files/"+includedURI+".html"
    } else {
        console.log("no URI found")
    }
}