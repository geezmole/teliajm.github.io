//https://adfs.prd1.prdroot.net/
if(document.referrer.search("127.0.0.1")>0 && 
{
  console.log("Referrer: " + document.referrer);
  console.log("Location: " + window.location.href);
  console.log("Running Boost-srcipt"); 
} 
else if (window.location.href.search("notice")<0)
{
  //window.location.replace("http://127.0.0.1/redirect.html");
  console.log("http://127.0.0.1/redirect.html");
}
else {
  console.log("Notices in admin"); 
}
