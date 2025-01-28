const getStoredCartData=()=>{
const storedDataStr= localStorage.getItem('cart');
if(storedDataStr){
    const storedData =JSON.parse(storedDataStr);
    return storedData
}
else{
    return []
}
}
const addToStoredCartData=(id)=>{
const storedData=getStoredCartData();
if(storedData.includes(id)){

}
else{
    storedData.push(id);
    const storedDataStr = JSON.stringify(storedData);
    localStorage.setItem('cart',storedDataStr)
}
}
export {getStoredCartData,addToStoredCartData}