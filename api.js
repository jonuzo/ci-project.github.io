API_KEY = '6aa86f5797de13c2b8d8eb2581248f51'
user_query = ''
fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+user_query+'&page=1&include_adult=false')
	.then(res => res.json())
    .then(data => console.log(data))
