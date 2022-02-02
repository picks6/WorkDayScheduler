$(currentDay).text(moment().format("dddd, MMMM Do"));

var hr = moment().format("HH");
var todoList = [];
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Runs on load to evaluate to add css class based on time
function styleCalendar(){
    for(var i=0; i <timeArray.length; i++){
    var rowId = "#hr" + timeArray[i];
  if (timeArray[i] < hr) {
    $(rowId).addClass('past');
  } else if (timeArray[i] === hr) {
    $(rowId).addClass('present');
  } else if (timeArray[i] > hr) {
    $(rowId).addClass('future');
  }
};
};


$('.btn').on('click', addTodo);


function addTodo(event) {
    var key = event.target.attributes.data.value;
    var todoItem = "event" + key;
    console.log(todoItem);
    var todo = document.querySelector(todoItem)
    var object = {
        hourID: key,
        todo: todo.value,
    }
    
    todoList.push(object);
    
    localStorage.setItem(key,object.todo);
}
