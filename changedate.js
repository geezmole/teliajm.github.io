var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
        const datetime = event.target.innerHTML;
        const datepart = datetime.substr(0,10);
        const timepart = datetime.substr(11,datetime.length-1);
        const dateArray = datepart.split("-").reverse();
        const dateString = dateArray.join("-");
        event.target.innerHTML = dateString+" "+timepart;
        console.log(dateString+" "+timepart);
    }
}
document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
