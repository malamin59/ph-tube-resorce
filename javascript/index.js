// https://openapi.programming-hero.com/api/phero-tube/categories

console.log("INdex is connected");

// created a function 
function loadCategories() {
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res)=> res.json())
.then((data)=> disPlayCategories(data.categories))


};
///category: "Music"category_id: "1001"[[Prototype]]: Object
// index.js:21 {category_id: '1003', category: 'Comedy'}
// index.js:21 {category_id: '1005', category: 'Drawing'}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then((response) => response.json())
  .then((data)=> disPlayVideos(data.videos))
}


function disPlayCategories(categories) {

// get 
const categoryContainer = document.getElementById("category-container");

for(let cat of categories) {
    // console.log(cat);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML=`
  <button class="btn btn-sm hover:bg-red-500 hover:text-white"> ${cat.category} </button>
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
  </div></div>
<div class="intro">
<h2 class="text-sm font-semibold">Midnight Serenade</h2>    
<p class="text-sm text-gray-400 flex gap-2"> ${video.authors[0].profile_name} <img class="w-5" src="https://img.icons8.com/?size=48&id=FNbnqlDTjR45&format=gif" alt=""> </p>
<p class="text-sm text-gray-400">${video.others.views}</p>
</div>
        </div>
      </div>


`;
videoContainer.append(videoCard)

 });

 }



loadCategories();
loadVideos();