
const fetchdata=document.getElementById("fetchbtn");
const text =document.getElementById("loadingtext");
const data=document.getElementById("data");
const error=document.getElementById("error");
const container = document.getElementById("products");
const asyncawait =document.getElementById("asyncawait");
const loaddata = document.getElementById("loaddata")
const combinedata= document.getElementById("combinedata");

//  Features 13.

fetchdata.addEventListener("click",()=>{
   
   text.textContent = "loading....";
   data.innerHTML="";
   error.textContent="";

  fetch("https://fakestoreapi.com/products/")
  .then(response => response.json())
  .then(data => {
    
   data.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <h3>${product.title}</h3>
        <h3>${product.price}</h3>
        <h3>${product.description}</h3>
        <h3>${product.category}</h3>
        <img src="${product.image}" />
        <h4>${product.rating}</h4> `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.log("Data Not Showing");
  });

   

});




 // Features 14


 asyncawait.addEventListener("click",()=>{
  
 async function fetchData (){
    
  container.innerHTML="";
   text.textContent = "loading....";
   data.innerHTML="";
   error.textContent="";
   try{
       let response = await fetch ("https://fakestoreapi.com/products/");
       if(response.ok){
          let data=  await response.json();
      data.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <h3>${product.title}</h3>
        <h3>${product.price}</h3>
        <h3>${product.description}</h3>
        <h3>${product.category}</h3>
        <img src="${product.image}" />
        <h4>${product.rating}</h4> `;

      container.appendChild(div);
    });

        }else{
            console.log("Error ");
        }
    }
   catch(error){
        
      console.log("Error Showing !");
   }
   finally{
       text.textContent = "loading....";
   }
   
 }

 fetchData();

 })


 // Feature 15



loaddata.addEventListener("click",()=>{
  
  
 function Loaddata (){


  text.textContent = "loading....";
   data.innerHTML="";
   error.textContent="";

   const url1 = "https://jsonplaceholder.typicode.com/albums";
   const url2 = "https://fakestoreapi.com/products/";

  //  Promise.all([

  //   fetch(url1).then(res=>{
  //     console.log(res.json())
  //   }),
  //   fetch(url2).then(res=>{
  //     console.log(res.json())
  //   })

  
    
  // ])

  // .then()

  // .catch(error=>{
  //    console.log("Error Showing !");
  // })
  // .finally({
    
  // })


  

  async function fetchData() {
  try {
    const [res1, res2] = await Promise.all([
      fetch(url1),
      fetch(url2)
    ]);

   
    const data1 = await res1.json();
    const data2 = await res2.json();

    console.log(data1, data2);
    return [data1, data2];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

   fetchData()
}


 Loaddata();
})
    
// features 16

const input = document.getElementById("input");
const actionbtn= document.getElementById("actionbtn");
  

 input.addEventListener("input",()=>{

     const value = input.value.trim();
      const number = Number(value);

     if( number>=1 &&  number <= 100000 )
     {
      actionbtn.textContent = "Pay";
     }else{
      actionbtn.textContent ="Send Message ";
     }

 })


 // fretures 18

//  const refershbtn = document.getElementById("Refreshbtn");

//  const api="https://jsonplaceholder.typicode.com/albums";


//  refershbtn.addEventListener("click",(e)=>{
//      e.preventDefault();
//   if(localStorage.getItem("api"))

//  })