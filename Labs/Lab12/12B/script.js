function tableToArray(table_id) {
  myData = document.getElementById(table_id).rows;
  my_list = [];
  for (var i = 0; i < myData.length; i++) {
    el = myData[i].children;
    my_el = [];
    for (var j = 0; j < el.length; j++) {
      my_el.push(el[j].innerText);
    }
    my_list.push(my_el);
  }
  return my_list;
}

var theTable = tableToArray(myTable);
console.log(theTable);