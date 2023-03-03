






function loadSearchData(){
    var searchresults = [
        {
            id: 1,
            title: "Result 1",
            link: "/one.html",
        },
        {
            id: 2,
            title: "Result 2",
            link: "/two.html",
        },
        {
            id: 3,
            title: "Result 3",
            link: "/three.html",
        },
        {
            id: 4,
            title: "Result 4",
            link: "/four.html",
        },
        {
            id: 5,
            title: "Result 5",
            link: "/five.html",
        },
        {
            id: 6,
            title: "Result 6",
            link: "/six.html",
        },
        {
            id: 7,
            title: "Result 7",
            link: "/seven.html",
        },
        {
            id: 8,
            title: "Result 8",
            link: "/eight.html",
        },
        {
            id: 9,
            title: "Result 9",
            link: "/nine.html",
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
