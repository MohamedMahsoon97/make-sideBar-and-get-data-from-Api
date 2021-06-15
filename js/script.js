var myContainer = document.getElementById("container");
var myOverlay = document.getElementById("overlay");
var searchBtn = document.getElementById("search-btn");
var openOverlay = document.getElementById("search-open");
var closeNav = document.getElementById("close");
var closeOverlay = document.getElementById("hide-overlay");
var myRequest = new XMLHttpRequest();
var myData = [];
var i;
myRequest.onreadystatechange = () => {
    if(myRequest.readyState == 4 && myRequest.status == 200){
        myData = JSON.parse(myRequest.response).articles;
        for(i = 0; i < myData.length; i++){
            // console.log(myData[i]); // for test
            myContainer.innerHTML += `
                <div>
                    <img src="${myData[i].urlToImage}">
                    <h2>${myData[i].author}</h2>
                    <p>${myData[i].description}</p>
                </div>
            `
        }
        // var myDiv = document.querySelectorAll("#container div");
        // for(var el = 0; el < myDiv.length; el++){
        //     console.log(myDiv[el]);
        // }
        
    }
};
myRequest.open("GET" , "main.json");
myRequest.send();


openOverlay.addEventListener("click" , function() {
    myOverlay.style.display = "flex";
});
closeOverlay.addEventListener("click" , function(){
    myOverlay.style.display = "none";
});


var searchValue = document.getElementById("search-value");
searchBtn.addEventListener("click" , function() {
    if(searchValue.value === myData[0].author) {
        myOverlay.style.display = "none";

    }else{
        searchValue.style.border = "1px solid #f00";
        searchValue.style.color = "#f00";
        searchValue.value = 'this author not exist';
    }
});

var myDiv = document.querySelectorAll("#container div");
// for(var div = 0; div < myDiv.length; div++){
//     console.log(div);
// }
// console.log(myDiv);


closeNav.addEventListener("click" , function(){
    var myNav = document.querySelector("nav");

    if(closeNav.firstElementChild.classList.contains('far')){
        closeNav.firstElementChild.setAttribute('class' , 'fa fa-bars');
        myNav.firstElementChild.classList.toggle("new-logo");
        myNav.style.width = "4%";
        closeNav.style.left = "20px";
        closeNav.style.top = "10px";
        myNav.childNodes[3].style.display = "none";
        myNav.childNodes[5].style.marginLeft = "-40px";
        myNav.childNodes[7].style.flexFlow = "column";
        myNav.childNodes[7].style.left = "5px";
        myContainer.style.width = "95%"

    } else{
        closeNav.firstElementChild.setAttribute('class' , 'far fa-window-close');
        myNav.firstElementChild.classList.toggle("new-logo");
        myNav.style.width = "17%";
        closeNav.style.top = "30px";
        closeNav.style.left = "220px";
        myNav.childNodes[3].style.display = "block";
        myNav.childNodes[5].style.display = "block";
        myNav.childNodes[5].style.marginLeft = "";
        myNav.childNodes[7].style.flexFlow = "row";
        myNav.childNodes[7].style.left = "20px";
        myContainer.style.width = "83%"
    }
});

