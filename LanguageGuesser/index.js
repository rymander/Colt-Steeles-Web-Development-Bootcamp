const franc = require('franc')
const langs = require('langs')
const args = process.argv.slice(2).join()
const colors = require('colors')


console.log(args)

let langCode = (franc(`${args}`))



if (langCode === 'und'){
    console.log('SORRY, UNABLE TO DETERMINE THAT. TRY AGAIN WITH MORE SAMPLE TEXT'.red)
} else {
    const language = langs.where('3',langCode)
    
    if (language){
        console.log(`${language.name.green}`)
    }
    else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}
