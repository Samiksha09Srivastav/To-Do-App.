let todo = [];

let req = prompt("Enter your request"); 

while(true){

    if(req == 'list'){
        console.log(todo);
    }

    else if( req == 'add'){
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("added");
    }

    else if( req == 'delete'){
        let idx = prompt("Enter the index");
        todo.splice(idx, 1);
        console.log("deleted");
    }

    else if( req == 'quit'){
        console.log("Quitting app");
        break;
    }

    else{
        alert("You enetred a wrong req");
    }

    req = prompt("Enter your request");
}