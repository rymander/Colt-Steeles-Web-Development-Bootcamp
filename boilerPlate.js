const fs = require('fs');
let folderName = process.argv[2] || 'Project'

fs.mkdirSync(folderName)


try{
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/script.js.html`, '')
fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e){
    console.log('Something went wrong!')
    console.log(e)
} 