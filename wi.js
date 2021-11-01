/* Add CSS that triggeres code when elements are added */
var css = `
    .humany-form-component-type-submit {
        animation-duration: 0.001s;
        animation-name: nodeInserted;
    }
    @keyframes nodeInserted { 
        from { opacity: 0.99; }
        to { opacity: 1; } 
    }
`;
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet) style.styleSheet.cssText = css;
else style.appendChild(document.createTextNode(css));


function Logger(status) {
    switch(status) {
      case "success":
        console.log("Success");
        fetch("https://jespertest.humany.net/logger/guides/370?client=2f64d3e2-3324-2699-9374-9bd9e55c2188&phrase=Success%20abcdefg", { method: "POST"});
        break;
      case "error":
        fetch("https://jespertest.humany.net/logger/guides/365?client=2f64d3e2-3324-2699-9374-9bd9e55c2188&phrase=Error%20abcdefg", { method: "POST"});
        break;
    }
}
function ValidateFormData() {
    //Check that all mandatory WI fields are present and have correct values
    //Check that every mandatory extra field has a (correct) value
    return true;
}
function CreateWorkItem() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "Application/json");

    //Create work item payload from form data
    var raw = `
    {
      "from" : "callguide@teliasonera.com",
      "subject" : "Test ärende",
      "entrance" : "AF_test",
      "menuchoice" : "menuchoice",
      "errand" : "WIT",
      "workitem": "http://teliasonera.se",
      "customKeys" : {
          "custKey1" : "ett",
          "custKey2" : "två"
      }
    }
    `;

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://wiproxy2.ccs.teliacompany.net/wi-interface-proxy/rest/Jn0tMKJs/workitem?username=wiKnowledgeTEST&password=T6hYkLTTdYpK!42KNxj", requestOptions)
      .then(response => response.text())
      .then(result => {
          console.log(result);
          Logger("success");
       })
      .catch(error => console.log('error', error));
}

/* Run code when forms are being added to the page */
var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    event.target.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        if(ValidateFormData()) CreateWorkItem();
        else {
            alert("Form data invalid");
        }
    });
  }
}

/* Register event listener insertionListener-elements pointed out in CSS */
document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
