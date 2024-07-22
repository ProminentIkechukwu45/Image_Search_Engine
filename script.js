const accessKey = "IcNl2MHFgjVA_YIU0qyDQkVk5KYNUPXQn_l-RcQbEsc";

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result)=>{
        //creation of the image for the site
        const image = document.createElement("img");
        image.src = result.urls.small;

        //creating link for user
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        //this link will be created in a new tab
        imageLink.target = "_blank";

        //show imageLink in the image
        imageLink.appendChild(image);

        //where the image should been shown
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})
//IcNl2MHFgjVA_YIU0qyDQkVk5KYNUPXQn_l-RcQbEsc



//Note image from unsplash