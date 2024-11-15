// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  let target = document.querySelector('#text-content');
  console.log(target);
  target.innerText ="WHY IT NO WORK WORK";
}

// Write your task 2 code inside this function!
function task2() {
  console.log('running task 2')
  let element = document.querySelector('#task2');
  console.log('yippee')
   element.classList.toggle("inverted");
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode('HAM'));
  ul.appendChild(li);
}
