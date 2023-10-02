
const handleCatageroy = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const category = data.data
    // console.log(category)
    //  console.log(data)
    const tabContainer = document.getElementById('tab-container')
    category.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML=`
        <a onclick="showDetails('${category.category_id}')" class="tab ">${category.category}</a> 
        `
        tabContainer.appendChild(div)
        
    });
}
const showDetails = async (categoryId) =>{
    //  console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
      // console.log(data.data)
    const News = data.data
    console.log(News)
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML=''
    // if lengtn =0
    if(News.length) {
      News.forEach((news)=>{
        const div = document.createElement('div')
        div.innerHTML = `
        
        
        <div class="card bg-base-100 shadow-xl h-full  ">
        <div>
        <figure><img class="h-40" src="${news?.thumbnail}" /></figure>
  
      </div>
      <div class="card-body">
        <h2 class="card-title">${news?.title}</h2>
        <div class="flex justify-center">
       <div>
        <figure><img  class="rounded-full w-16"  src="${news?.authors[0].profile_picture}" /></figure>
        </div>
        <h2 class="items-center m-auto ml-2">${news?.authors[0].profile_name}</h2> 

      
    </div>
    
      <p>Views:${news?.others.views}</p> 
        
    </div>

        `
        cardContainer.appendChild(div)
        
       

    });
    }
    else {
      const div = document.createElement('div')
      div.innerHTML = `
      
      
      <div class=" items-center ml-60">
      <img src="Icon.png" alt="">
    </div>

      `
      cardContainer.appendChild(div)
    }
    

}
const handledBlog = ()=>{
  const blog = document.getElementById('blog-container')
  blog = window.location.href='blog.html'
}


handleCatageroy()
showDetails("1000")