function  addHR(divID, isClass) {
    var dataHolder;
    if(isClass){
        dataHolder = document.getElementsByClassName(divID)[0];
    }
    else{
        dataHolder = document.getElementById(divID);
    }
    
    var elem = document.createElement("hr");
    dataHolder.appendChild(elem);
}