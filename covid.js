function api () {
    var searchText = document.getElementById("search").value ; 
  
    var url = `https://api.covid19api.com/live/country/${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
  // clearing search box and prev. content 
     document.getElementById("search").value = " "; 
     document.getElementById("container2").textContent = " ";
  
  }
  
  function display(data){
  
   var oldContent = document.getElementById("container2");
  
     console.log(data[0]);
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">confirmed cases: ${data[0].Confirmed}</h5>
      <h5 class="card-title">Deaths: ${data[0].Deaths}</h5>
      <h5 class="card-title">Recovered: ${data[0].Recovered}</h5>
      
      <a href="#" class="btn ">Learn More</a>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   
  
  }
  function api2() {
    var searchText = document.getElementById("search1").value ; 
  
    var url = `https://restcountries.com/v3.1/name/${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display1(data)   ); 
  
  // clearing search box and prev. content 
     document.getElementById("search1").value = " "; 
     document.getElementById("container1").textContent = " ";
  
  }
  
  function display1(data){
  
   var oldContent = document.getElementById("container1");
   
     console.log(data[0]);
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
     
     <img src="${data[0].flags.png}" class="card-img-top" alt="...">
     <br>
    
    <div class="card-body">
      <h5 class="card-title">Name: ${data[0].name.common}</h5>
      <h5 class="card-title">Capital: ${data[0].capital}</h5>
      <h5 class="card-title">Population: ${data[0].population}</h5>
      
     
      
      <a href="https://countrycode.org/" class="btn btn-primary">Learn More</a>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   
  
  }