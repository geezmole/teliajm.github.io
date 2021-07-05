if(document.referrer.search("127.0.0.1")<0 && window.location.href.search("/notice")<0)
{
  //window.location.replace("http://127.0.0.1/redirect.html");
  console.log("http://127.0.0.1/redirect.html");
} 
else 
{
  console.log("Running Boost-srcipt"); 
}
