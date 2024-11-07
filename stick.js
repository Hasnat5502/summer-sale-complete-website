// non stick section
function minimizecode(main,data, price){
    document.getElementById(main).addEventListener('click',function(){
        const call = getdata(data);
        append('voucher', call);
        const getprice = getdataofprice('totalmain')
        const getinput = getdataofprice(price);
        const newtotal = getprice+getinput;
        setvalue('totalmain',newtotal);
        if (newtotal > 0) {
            purchase.disabled = false;
          }
        if(newtotal>200){
            coupon.disabled = false;
          }
        
    })
}
document.getElementById('coupon').addEventListener('click',function(){
    const newtotal = getdata('totalmain');
    const inputfield = document.getElementById('couponinput');
    const inputval = inputfield.value;
    if(inputval==="SELL200"){
        const aftercoupon = newtotal*0.20;
        setvalue('discount-amount',aftercoupon);
        const totalamountaftercoupon = newtotal-aftercoupon.toFixed(2);
        setvalue('totalamountaftercoupon', totalamountaftercoupon);
    }
    else{
        alert('Invalid coupon')
    }
})
// nonstick
minimizecode('nonstick','kitchenex','rate');
// other nonstick
minimizecode('other-nonstick','nameofothernonstick','priceofothernonstick');
// home cooker
minimizecode('homecookermain','Homecooker','Homecookerprice');

// -------section2 sportsware-----------
// cap
minimizecode('cap-main','cap','cap-price');
// jersey
minimizecode('jersey-main','jersey','jersey-price');
// shoes
minimizecode('shoes-main','shoes','shoes-price');

// --------Section3 furniture-------------
// singlesofa
minimizecode('singlesofa-main','singlesofa','singlesofa-price');
// childrensofa
minimizecode('childrensofa-main','childrensofa','childrensofa-price');
// 
minimizecode('flexiblesofa-main','flexiblesofa','flexiblesofa-price');
document.getElementById('goback').addEventListener('click',function(){
    window.location.href = "Index.html";
})