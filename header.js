$(function () {
    var bar = '';
    // bar += '<nav class="navbar navbar-default" role="navigation">';
    // bar += '<div class="container-fluid">';
    // bar += '<div>';
    // bar += '<ul class="nav navbar-nav">';
    // bar += '<li id="home"><a href="home.html">Home</a></li>';
    // bar += '<li id="index"><a href="index.html">Index</a></li>';
    // bar += '<li id="about"><a href="about.html">About</a></li>';
    // bar += '</ul>';
    // bar += '</div>';
    // bar += '</div>';
    // bar += '</nav>';

    bar += '<header class="header" style="padding-left: 15rem;">';

    bar +=   '<a href="#" id="logo"><img src="images/logo.png" alt=""></a>';
    bar += ' <nav class="navbar">';
    bar += '       <a href="./index.html">Home</a>';
    bar += '  <a href="#">About us</a>';
    bar += '       <a href="#">Services</a>';
    bar += '    <a href="#">Pricing</a>';
    bar += '  <a href="#">Shop</a>';
    bar += '  <a href="#">Contact us</a>';
    bar += '  </nav>';
    bar += '<div class="icons">';
    bar += '   <div id="menu-bar" class="fas fa-bars"></div>';
    bar += '</div>'
    
    bar += '</header> ';


    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}