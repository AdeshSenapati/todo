arr_list = [];
temp = 0;
function removeDuplicates(arr_list) {
    return arr_list.filter((item,
        index) => arr_list.indexOf(item) === index);
}
function add_item() {
    

    temp=temp + 1;
    console.log(temp);
    let item1 = document.getElementById("box");
    let item2 = document.getElementById("name");
    let item3 = document.getElementById("date");
    let list_item = document.getElementById("list_item");
    if(item1.value != "" && item2.value != "" && item3.value != ""){
   

        let make_li = document.createElement("DIV");
        let cc = "NAME: "+item2.value+"<br>"+"DATE: "+item3.value+"<br>"+"TODO: "+item1.value;
        make_li.innerHTML = cc;
        make_li.setAttribute("id", temp)

        list_item.appendChild(make_li);
 
        item1.value=""
        item2.value=""
        item3.value=""
         

        make_li.onclick = function(){

          arr_list.push(make_li.id);
          make_li.style.backgroundColor = "#ffdeda";
        }
   
    }
    else{
   

      alert("plz add a value to item");
    }
   
  }
function delete_item(){
    arr = removeDuplicates(arr_list);
    console.log(arr)
    for(let i=0; i<arr.length; i++){
        document.getElementById(arr[i]).remove();
    }
    arr_list = [];
}