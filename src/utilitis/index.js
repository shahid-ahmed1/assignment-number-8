import { toast } from "react-toastify";

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
    toast.error('this product alredy added',{
        position:"top-center",
        autoClose: 2000,
    })
}
else{
    storedData.push(id);
    const storedDataStr = JSON.stringify(storedData);
    localStorage.setItem('cart',storedDataStr);
    toast.success('this product added to card',{
        position:"top-center",
        autoClose: 2000,
    })
    
}
}
const getStoredWishData=()=>{
const storedDataStr= localStorage.getItem('wish');
if(storedDataStr){
    const storedData =JSON.parse(storedDataStr);
  
    return storedData
}
else{
    return []
}
}
const addToStoredWishData=(id)=>{
const storedData=getStoredWishData();
if(storedData.includes(id)){
    toast.error('this product alredy added',{
        position:"top-center",
        autoClose: 2000,
    })
    
}
else{
    storedData.push(id);
    const storedDataStr = JSON.stringify(storedData);
    localStorage.setItem('wish',storedDataStr)
toast.success('this product added to wishlist',{
    position:"top-center",
    autoClose: 2000,
})
}
}
export {getStoredCartData,addToStoredCartData,getStoredWishData,addToStoredWishData}