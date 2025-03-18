// https://openapi.programming-hero.com/api/phero-tube/categories

window.aaaf = function() {
  alert("Button Clicked!")
}

console.log("INdex is connected");

function removeActiveClass() {   
  const activeButtons = document.getElementsByClassName("active");
  
  for(let btn of activeButtons) {
    btn.classList.remove("active")
  }
    // console.log(activeButtons);
       }

// created a function 
function loadCategories() {
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res)=> res.json())
.then((data)=> disPlayCategories(data.categories))


};

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then((response) => response.json())
  .then((data)=> disPlayVideos(data.videos))
}



function loadCategoryVideos(id) {
console.log(id);
const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

fetch(url)
.then((res)=> res.json())
.then((data)=> {
  removeActiveClass();
  
  const clickedButton = document.getElementById(`btn-${id}`)
  clickedButton.classList.add("active")
  disPlayVideos(data.category)

})

}
const loadVideoDetails=(videoId)=>{
  console.log(videoId)
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> disPlayVideosDetails(data.video));
} ;

const disPlayVideosDetails=(video) => {
  console.log(video);
  document.getElementById("video_details").showModal()
  const detailsContainer= document.getElementById("details_container");

  detailsContainer.innerHTML = `
<div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"> ${video.title}</h2>
    <p class=""> ${video.description}</p>
    <h2 class="font-bold text-sky-400" > category id is ${video.video_id} </h2>
    <h2 class=" font-bold">  video is ${video.category_id} </h2>
     <div class="card-actions justify-end">
    </div> 
  </div>
</div>




  `
  

} 
/**
 * 
 * authors
: 
[{…}]
category_id
: 
"1001"
description
: 
"'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
others
: 
{views: '543K', posted_date: ''}
thumbnail
: 
"https://i.ibb.co/QPNzYVy/moonlight.jpg"
title
: 
"Midnight Serenade"
video_id
: 
"aaab"
[[Prototype]]
: 
Object
 * 
 *  
 */

function disPlayCategories(categories) {
  
  // get 
  const categoryContainer = document.getElementById("category-container");
  
  for(let cat of categories) {
    // console.log(cat);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML=`
    <button id= "btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white"> ${cat.category} </button>
    `;
    categoryContainer.append(categoryDiv)
  }
  

/**
 * {category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', authors: Array(1), …}
authors
: 
[{…}]
category_id
: 
"1001"
description
: 
"'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
others
: 
{views: '7.6K', posted_date: '16450'}
thumbnail
: 
"https://i.ibb.co/hdtZYbB/enchnting.jpg"
title
: 
"Enchanted Harmonies"
video_id
: 
"aaal"
[[Prototype]]
: 
Object
* 
* 
*/

}



const disPlayVideos=(videos)=> {
  const videoContainer = document.getElementById("video-container");
videoContainer.innerHTML = "";

if(videos.length === 0) {
  videoContainer.innerHTML = `
   <div class="col-span-full flex flex-col justify-center items-center py-20 text-center">
    <img class="w-[120px]" src="img/Icon.png" alt=""> 
    <h2 class="font-bold">Oops!! Sorry, There is no content here</h2>
   </div>

  `
  return;
} 

  videos.forEach(video => {
    // create element 
    console.log(video);
    
const videoCard = document.createElement("div")
videoCard.innerHTML= `

 <div class="card bg-base-100 gap-5">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute  bottom-2 right-2 text-white bg-black p-2 text-sm rounded"> 3hrs 56 min ago</span>
        </figure>
        <div class="flex gap-3 px-0">

<div class="profile"> <div class="avatar">
    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
      <img src="${video.authors[0].profile_picture}" />
    </div>
  </div>
  </div>
<div class="intro">
<h2 class="text-sm font-semibold">Midnight Serenade</h2>    
<p class="text-sm text-gray-400 flex gap-2"> ${video.authors[0].profile_name} <img class="w-5" src="https://img.icons8.com/?size=48&id=FNbnqlDTjR45&format=gif" alt=""> </p>
<p class="text-sm text-gray-400">${video.others.views}</p>
</div>
        </div>
        <button onclick=loadVideoDetails("${video.video_id}") class="btn btn-block">Show Details</button>
      </div>
`;


videoContainer.append(videoCard)

});

}



loadCategories();
// loadVideos();

