async function addHR(divID, isClass, marginTop, marginBottom) {
    var dataHolder;
    if(isClass){
        dataHolder = document.getElementsByClassName(divID)[0];
    }
    else{
        dataHolder = document.getElementById(divID);
    }
    
    var elem = document.createElement("hr");

    elem.style.marginTop = marginTop;
    elem.style.marginBottom = marginBottom;
    
    dataHolder.appendChild(elem);
}