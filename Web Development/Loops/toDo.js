let input
const list = []

while (input !== 'quit') {
    input = prompt('Enter a command')
    if (input == 'add') {
        const newToDo = prompt('Enter what you want to add to the list:')
        list.push(newToDo)
        console.log(`${newToDo} added to the list`)
    } else if (input == 'list') {
        console.log('********')
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        } console.log('********')
    } else if (input == 'delete') {
        let removeToDo = prompt('Enter the index # of the item you want to delete')
        console.log(removeToDo)
        const deleted = list.splice(parseInt(removeToDo), 1)
        console.log(deleted)




    }

} console.log('Ok quitting!')