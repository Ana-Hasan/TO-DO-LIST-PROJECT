let input = prompt("What would you like to do?");
const todos = ['Collect Eggs', 'Clean Litterbox'];
while(input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log("*******")
        for(let i = 0; i< todos.lenght; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*******")
    }
    input = prompt("What would you like to do?")
}
console.log('OK QUITTING THE APP!')