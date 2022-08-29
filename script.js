// Get input
let filterInput = document.getElementById("filterInput");

const filterNames = () => {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  let names = document.getElementById("names");
  // Get items
  let items = names.querySelectorAll("li.collection-item");

  for(let i = 0; i < items.length; i++){
    let a = items[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      items[i].style.display = "";
    }
    else{
      items[i].style.display = "none";
    }
  }
}



// Add event listener
filterInput.addEventListener("keyup", filterNames);

