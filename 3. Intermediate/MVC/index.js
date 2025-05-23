// Process argv : bisa mengambil input dari terminal

const command = process.argv[2];
const params = process.argv.slice(3); 
const TodoController = require('./controller/TodoController')
const TodoView = require('./view/TodoView')

switch (command) {
    case 'show' :
        TodoController.show();
        break;
    case 'add' :
        TodoController.add(params);
        break;
    case 'delete' :
        TodoController.delete(params);
        break;
    case 'update' :
        TodoController.update(params);
        break;
    default: 
        TodoView.massage("command tidak dikenali")
        break;
}