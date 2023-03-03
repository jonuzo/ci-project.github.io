function fetch_data(){
	API_KEY = '6aa86f5797de13c2b8d8eb2581248f51'
	user_query = 'Thor'
	const list = []
	fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+user_query+'&page=1&include_adult=false')
		.then(res => res.json())
    		.then(data => {
    			results = data.results;
      			for (let movie of results) {		
			    	list.push(movie.original_title)
  				return(list[id])
					
      }
    })
}



function loadSearchData(){
    title = fetch_data()
    var searchresults = [
        {
            id: 1,
            title: "title",
            link: "/one.html",
        },
        {
            id: 2,
            title: "title",
            link: "/two.html",
        },
        {
            id: 3,
            title: "title",
            link: "/three.html",
        }
        
    ];

    var searchbar = document.getElementById("list");

    for (var i = 0; i < searchresults.length; i++) {
        var linkInfo = searchresults[i];

        var a = document.createElement("a");
        a.innerText = linkInfo.title;
        a.href = linkInfo.link;
        a.classList.add("listItem");
        searchbar.appendChild(a);
        }
}



function search(){
    var listContainer = document.getElementById('list');
    var listItems = document.getElementsByClassName('listItem');
    var input = document.getElementById('searchbar').value;
    input = input.toLowerCase(); 

    var noResults = true;
    for (i = 0; i < listItems.length; i++) { 
            if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
                listItems[i].style.display="none";
                continue;
            }
            else {
                listItems[i].style.display="flex";
                noResults = false; 
            }
        }
    listContainer.style.display = noResults ? "none" : "block";
}
