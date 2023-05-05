function validateForm() {
	var query = document.forms["searchForm"]["query"].value;
	if (query == "") {
		alert("Please enter a search query");
		return false;
	}
	return true;
}

function getSearchResults(query) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("search-results").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "search.php?q=" + query, true);
	xmlhttp.send();
}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})