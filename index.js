let inputValue = document.getElementById("titleInput");
let textareaValue=document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");
let movieReviewsContainer = document.getElementById("reviewsContainer");


addBtn.onclick=function(){
    let title = inputValue.value;
    let reviewText = textareaValue.value;
    if(title,reviewText === ""){
        alert("Please Enter Title & Review");
        return
    }
    let reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-cls");
    movieReviewsContainer.appendChild(reviewDiv);
    let reviewTitle = document.createElement("h3");
    reviewTitle.textContent = title;
    reviewDiv.appendChild(reviewTitle);
    let reviewContent = document.createElement("p");
    reviewContent.textContent = reviewText;
    reviewDiv.appendChild(reviewContent);
    inputValue.value="";
    textareaValue.value="";
}

function normalBtn(){
    inputValue.value="";
    textareaValue.value="";
    movieReviewsContainer="";
}

// let movieReview=[
//     {
//         title:inputValue.value,
//         review:textareaValue.value,
//         id:1
//     },
// ]


// // let movieReviewLength = movieReview.length;
// function addMovieReviewList(userReview){
// console.log(userReview)
// }

// function onAddButton(){

//     let userInputValue = movieReview.title;
//     let userTextareaValue = movieReview.review;
//     if(userInputValue,userTextareaValue == "")
//     {
//         alert("Please Enter Title & Review");
//         return
//     }



//     // let movieReviewCount = movieReviewLength+1;
//     let movieReviewIncrease=
//     {
//         movie: userInputValue,
//         review: userTextareaValue,
//     }
    
//     // addMovieReviewList(movieReviewIncrease);
    
//     // inputValue.value="";
//     // textareaValue.value="";

// localStorage.setItem("movieReviewIncrease",movieReviewIncrease.movie);
// }
// let storedValue = localStorage.getItem("movieReviewIncrease");

// // if(storedValue === null){
// //     inputValue,textareaValue.value="";
// // }else{
// //     inputValue,textareaValue.value=storedValue;
// // }

// movieReviewsContainer.textContent=storedValue;

// for(let userReview of movieReview)
// {
//     addMovieReviewList(userReview);
// }

// addBtn.onclick=function()
//     {
//     onAddButton();
//     inputValue.value="";
//     textareaValue.value="";
//     }


