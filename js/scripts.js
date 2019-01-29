function List() {
  this.tasks = []
}

List.prototype.addItem = function(item) {
  this.tasks.push(item);
}

function Task(item) {
  this.item = item
}

var list = new List();


// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    list.addItem($("#userInput").val());
    console.log(list);

  });
});
