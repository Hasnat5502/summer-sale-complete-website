function getdata(text){
    const providedata = document.getElementById(text);
    const providedataval = providedata.innerText;
    return providedataval;
   
}
function append(element, cat){
    const vouch = document.getElementById(element);
    const count = vouch.childElementCount;
    const childvou = document.createElement('p');
    childvou.innerHTML = `${count}. ${cat}`;
    vouch.appendChild(childvou);
}
function getdataofprice(price){
    const mainprice = document.getElementById(price);
    const innerprice = mainprice.innerText;
    const floatinnerprice = parseFloat(innerprice);
    return floatinnerprice;

}
function setvalue(element,newvalue){
    const val = document.getElementById(element);
    val.innerText = newvalue;
}


