self.__protocoller$config = {
    protocol: 'proxy',
    suffix: '://',
    helpURI: 'help',
    helpFile: './proto/files/help.html'
};

function test() {
    var ier = document.getElementById("address").value.replace(__protocoller$config.protocol+__protocoller$config.suffix, '');
    var ifr = document.createElement("iframe");
    ifr.style.position = "absolute";
    ifr.style.left = "0px";
    ifr.style.top = "0px";
    ifr.style.width = '100%';
    ifr.style.height = '100%';
    ifr.style.border = "none";
    document.body.appendChild(ifr)
    if (ier.includes(__protocoller$config.helpURI)) {
        ifr.src = __protocoller$config.helpFile
    }
}