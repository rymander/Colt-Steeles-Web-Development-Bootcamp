// https://api.tvmaze.com/search/shows?q= 
const queryForm = document.querySelector('#query')
const search = document.querySelector('#search')
const clear = document.querySelector('#clear')
const container = document.querySelector('#container')

queryForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    let searchTerm = search.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res.data[0].show.image.medium)
    const img = document.createElement('img')
    img.src = res.data[0].show.image.medium
    container.append(img)
    search.value = ''
 })

 clear.addEventListener('click', (e)=>{
    for (img of container.children){
        container.removeChild(img)
    }
 })
 
 