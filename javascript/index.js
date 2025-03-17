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

<div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"> ${video.title} </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

`;
videoContainer.append(videoCard)

 });

 }



loadCategories();
loadVideos();