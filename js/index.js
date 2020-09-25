let search = document.querySelector('.search');
let inp = document.querySelector('.inp');
let addbtn = document.querySelector('.add');
let tbl = document.querySelector('.table');
let close = document.createElement('span')
// function so add list to table
addbtn.addEventListener('click', function(e){
  e.preventDefault();

  addListToTbl()
})

function addListToTbl(){
  let closet = document.querySelector('span')
  let close = document.createElement('span')
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  tr.setAttribute('class', 'tr')
  td.setAttribute('class', 'td')
  td.innerHTML = inp.value;
  close.setAttribute('class', 'close')
  close.textContent = "x";
    // remove child element
  close.addEventListener('click', ()=>{
    tbl.removeChild(tr)
  })
  
  if (inp.value == "") {
    tbl.removeChild(tr)
  } else {
    td.appendChild(close)
  tr.appendChild(td);
  tbl.appendChild(tr)
  }
  inp.value = "";

  tr.addEventListener('click', function(){
    td.classList.toggle('checked')
  })
}


// function searchItem(){
//   // search for items
//   let filter,td,tr,txtValue,i;
//   tr = document.querySelector(".tr")
//   filter = search.value.toUpperCase();

//   for (i = 0; i < tr.length; i++) {
//     // td = tr[i].querySelector(".td")[0];
//     // if (td) {
//     //   txtValue = td.textContent || td.innerText;
//     //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     //     tr[i].style.display = "";
//     //   } else {
//     //     tr[i].style.display = "none";
//     //   }
//     // }
//     console.log(tr[i]);
//   }
// }searchItem()

