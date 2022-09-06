const todoTemplate = document.querySelector('#todo-template').content;
// const todo = todoTemplate.querySelector('.todo');
const taskList = document.getElementById('task-list');
// taskList.attachShadow({mode: "open"});
const form = document.getElementById('form');

window.onload = () => {
	Object.keys(localStorage).forEach( (key) => {
		taskList.append(todoTemplate.cloneNode(true));
		document.getElementById(`task__div`).id = `task__div-${key}`;
		let todo = document.getElementById(`task__div-${key}`);
		// console.log(todo);
		// todo.querySelector('.task-text').id = `task-text-${key}`;
		// document.getElementById(`task-text-${key}`).innerHTML = localStorage.getItem(key);
		// todo.querySelector('.delete-button').id = `delete-button-${key}`;
		// const deleteButton = document.getElementById(`delete-button-${key}`);
		// deleteTask(deleteButton);
		todo.querySelector('.task-text').innerHTML = localStorage.getItem(key);
		const deleteButton = todo.querySelector('.delete-button');
		deleteTask(deleteButton);
	})
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const task = formData.get('task');
	event.target.reset();
	const locStorKey = Math.random();
	console.log(locStorKey);
	localStorage.setItem(locStorKey, task);
	taskList.append(todoTemplate.cloneNode(true));
	document.getElementById(`task__div`).id = `task__div-${locStorKey}`;
	let todo = document.getElementById(`task__div-${locStorKey}`);
	console.log(todo);
	// todo.querySelector('.task-text').id = `task-text-${locStorKey}`;
	// document.getElementById(`task-text-${locStorKey}`).innerHTML = task.toString();
	// todo.querySelector('.delete-button').id = `delete-button-${locStorKey}`;
	// const deleteButton = document.getElementById(`delete-button-${locStorKey}`);
	todo.querySelector('.task-text').innerHTML = task.toString();
	const deleteButton = todo.querySelector('.delete-button');
	deleteTask(deleteButton);
})

function deleteTask (element) {
	element.addEventListener('click', (event) => {
		const lsKey = element.parentNode.firstChild.id.slice(10);
		// console.log(lsKey);
		localStorage.removeItem(lsKey);
		element.parentElement.remove();
		event.stopPropagation();
	})
}