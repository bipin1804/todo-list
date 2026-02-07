

let todo=[];
while(true){

let req=prompt("write here those task you want to do");

if(req=="quit"){
    console.log("quitting the game");
    break;
}

if(req=="list"){
    console.log(" there is a item-------")
    for(i=0; i<todo.length; i++){
        console.log(i,todo[i]);
    }
    console.log(" there is a item------")
}

if(req=="add"){
    let task=prompt("add task");
    todo.push(task);
console.log("task item deleted");
}


if(req=="delete"){
    let idx=prompt("write delete item  number");
    todo.splice(idx,1);
}

}