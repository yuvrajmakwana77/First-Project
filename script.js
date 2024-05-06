/*document.addEventListener('DOMContentLoaded',function() {
const accesskey = "Kt8GMSK_AXfifGeFjayG6U-HEj0j82oEkG4msbt-X5M";
const searchForm =document.getElementById("search-form");
const searchBox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");
//Api is from unsplash website
// access key = "Kt8GMSK_AXfifGeFjayG6U-HEj0j82oEkG4msbt-X5M"
//Secret Key="cjIdMgLKKTV3P5p2UkPeS8dOT8iZr9m-bNmrnzMRCuU"
let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);
    const results  = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink =document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
});
*/


    const accessKey = "Kt8GMSK_AXfifGeFjayG6U-HEj0j82oEkG4msbt-X5M";
    const searchForm = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const searchResult = document.getElementById("search-result");
    const showMoreBtn = document.getElementById("show-more-btn");
    let keyword = "";
    let page = 1;

    async function searchImages(){
        keyword = searchBox.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
        
        const response = await fetch(url);
        const data = await response.json();

        if(page === 1)
        {
            searchResult.innerHTML = "" ;
        }

        const results  = data.results;
        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });
        showMoreBtn.style.display = "block";
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        page = 1;
        searchImages();
    });

    showMoreBtn.addEventListener("click" , ()=>{
        page++;
        searchImages();
    })
