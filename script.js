$(currentDay).text(moment().format("dddd, MMMM Do"));

var hr = moment().format("HH");
var todoList = [];
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Runs on load to evaluate to add css class based on time
function styleCalendar(){
    for(i=0; i<timeArray.length; i++){
    var rowId = "hr" + timeArray[i];
    console.log(rowId);
    console.log(hr);
    console.log(i);
  if (timeArray[i] < hr) {
    rowElement = document.getElementById(rowId);
    rowElement.classList.add("past");    
  } else if (i === hr) {
    rowElement = document.getElementById(rowId);
    rowElement.classList.add("present");  
  } else if (i > hr) {
    rowElement = document.getElementById(rowId);
    rowElement.classList.add("future");  
  }
};
};

//click save button to add event to storage
$('.saveBtn').on('click', addTodo);

//add item to local storage based on save button clicked
function addTodo(event) {
    var key = event.target.attributes.data.value;
    var todoItem = "event" + key;
    console.log(todoItem);
    var todo = document.getElementById('event' + key)
    console.log(todo);
    var object = {
        hourID: key,
        todo: todo.value,
    }
    
    todoList.push(object);
    
    localStorage.setItem(object.hourID,object.todo);
}

//retrieve local storage
function populateCalendar () {
  for(i=9; i<18; i++){
      var updateTodo = localStorage.getItem(i,i.value)
      var key = document.getElementById('event'+i);
      key.value = updateTodo
  }
}    
//on page load, style the calendar based on local time and populate events from local storage
function calendar(){
  styleCalendar();
  populateCalendar();
}

//empty local storage when button is clicked
function clearCalendar () {
  localStorage.clear();
  location.reload();
}

//clear calendar button
$('.btn-danger').on('click', clearCalendar);