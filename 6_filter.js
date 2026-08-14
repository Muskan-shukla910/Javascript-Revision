// / filter methos
// find and findIndex

const products=[
    {name:"Laptop",price:200},
    {name:"Phone",price:3000},
    {name:"SmartWatch",price:300}
]
// filter producta with a price less than or equal to 500

const filterProducts=products.filter((currEle)=>{
    return currEle.price <= 500;
})


// console.log(filterProducts);

// find out unique values
const nunbers=[1,2,3,4,5,6,7,6,7,5,7,];

let rs=nunbers.filter((currVAl,idx,arr)=>{
    
    // console.log(currVAl != nunbers[idx+1]);
    
    
    
});
// console.log(rs);


// sort and compare (important to know it 

// the sorts method sorts the element of an array in place and returns the sorted array . By defalt , it sorts elements as strings 
const fruits=["Banana", "Apple","Orange","MAngo"];
fruits.sort();
// console.log(fruits);

// Campare method 

// const sortedNumbers=nunbers.sort((a,b)=>a-b);
// if(a>b) return 1 => switch the order
// if(a<b)  return -1 => keep the order.

const sortedNumbers=nunbers.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
})
// console.log(nunbers);