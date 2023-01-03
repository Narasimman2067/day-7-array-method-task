// // Get all the countries from the Asia continent /region using the Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function()
{
    var data =request.response;
    var result =JSON.parse (data)
    var res=result.filter((ele)=>ele.continents)
    var res1=res.map((ele)=>(`Name:${ele.name.common}  continents:${ele.continents} `))
    console.log(res1);
}


// // Get all the countries with a population of less than 2 lakhs using Filter function  
   
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function()
{
    var data =request.response;
    var result1 =JSON.parse (data)   
   var res2=result1.filter((ele)=>((ele.population<300000)));
 var res3=res2.map((ele)=>(`Name:${ele.name.common}  population:${ele.population} `))
  console.log(res3) 
}



// // Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function()
{
    var data =request.response;
    var result2 =JSON.parse (data)  
    var res=result2.forEach((ele) => 
    {
       
        console.log(`country:${ele.name} ,capital:${ele.capital} ,flag:${ele.flag}, population: ${ele.population}
        `)
    });
}



// Print the total population of countries using reduce function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function()
{
    var data =request.response;
    var result3 =JSON.parse (data) 
    var res3=result3.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res3);
}




//Print the country which uses US Dollars as currency.



var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res=result.filter((ele)=>{
        for(let key in ele.currencies){
            if(ele.currencies[key].code==="USD")
        {
            console.log(ele.name)
        }
    }
       
    })
}




    
   
       
    

