window.onload=function(){
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};


window.fbAsyncInit = function() {
    FB.init({
      appId      : 1711942948878214,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    FB.AppEvents.logPageView();   
    FB.Event.subscribe('xfbml.render', finished_rendering); 
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  var finished_rendering = function() {
    console.log("finished rendering plugins");
    var spinner = document.getElementById("spinner");
    spinner.innerHTML="Or";
    spinner.style.fontSize="1.5em";
    spinner.style.fontWeight="bold";
    }