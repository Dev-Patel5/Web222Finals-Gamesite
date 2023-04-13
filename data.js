let reviewData = [ 
    {
        name: "Aaryan Dhobi",
        date: "January 4, 2012",
        rating: 1,
        text: "I really dislike Carrom. The game is not fun at all, and I would rather play almost any other board game. The gameplay is slow and uninteresting, and the game pieces are difficult to handle. Additionally, the game can be frustrating, as it often feels like luck plays a bigger role than skill."
    },
    {
        name: "Milan Murli Patel",
        date: "March 25, 2016",
        rating: 2.5,
        text: "I'm not a fan of Carrom. While the game is popular in India, I find it to be too simple and boring. The gameplay feels repetitive, and the rules are too basic to make the game truly engaging. Additionally, the game pieces can be difficult to control, making it frustrating to play."
    },
    {
        name: "Rudra Panchal",
        date: "July 14, 2014",
        rating: 3,
        text: "Carrom is an okay game, but I wouldn't say it's one of my favorites. While the game is easy to learn, I find that it lacks the strategic depth of other board games. The board and pieces are of good quality, but I find the gameplay to be a bit slow and tedious at times."
    },    
    {
        name: "Nisarg Surti",
        date: "August 21, 2018",
        rating: 4,
        text: "Carrom is a great game that I enjoy playing with my friends and family. The game is simple to learn, and the rules are easy to follow. However, I find that the game can get repetitive after a while, and I wish there were more variations to keep things interesting. Also, the game pieces can be a bit difficult to flick at times, which can be frustrating. "
    },    
    {
        name: "Vedant Prajapati",
        date: "November 14, 2019",
        rating: 5,
        text: "Carrom is an excellent game that I would recommend to anyone looking for a fun and challenging board game. The game is easy to learn but hard to master, and it's always exciting to see how each game will play out. The board and pieces are well-made, and the game is durable enough to last for years. "
    }
]

let reviewSection = document.getElementById("review-section");

window.onload = () => {
    updateReviewCards();
}

let updateReviewCards = () => {
    for (let i = 0; i < reviewData.length; i++) {
        let reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        let reviewName = document.createElement("h2");
        reviewName.classList.add("review-name");
        reviewName.innerText = reviewData[i].name;
        reviewCard.appendChild(reviewName);

        let reviewDate = document.createElement("time");
        reviewDate.classList.add("review-date");
        reviewDate.setAttribute("datetime", reviewData[i].date);
        reviewDate.innerText = reviewData[i].date;
        reviewCard.appendChild(reviewDate);

        let reviewRating = document.createElement("span");
        reviewRating.classList.add("review-rating");
        let stars = reviewData[i].rating;
        let isHalf = false;
        for (let i = 0; i < Math.floor(stars); i++) {
            reviewRating.innerHTML += `<span class="material-icons">
            star
            </span>`;
        }
        if (stars % 1 !== 0) {
            reviewRating.innerHTML += `<span class="material-symbols-outlined">star_half</span>`;
            isHalf = true;
        }
        for (let j = isHalf ? Math.ceil(stars) : Math.floor(stars); j < 5; j++) {
            reviewRating.innerHTML += `<span class="material-symbols-outlined">star</span>`;
        }
        reviewCard.appendChild(reviewRating);

        let reviewText = document.createElement("p");
        reviewText.classList.add("review-text");
        reviewText.innerText = reviewData[i].text;
        reviewCard.appendChild(reviewText);
        

        reviewSection.appendChild(reviewCard);
    }
}

let addReviewCard = (event) => {
    event.preventDefault(); 
    let fname = document.getElementById("name-input");
    let fdate = document.getElementById("date-input");
    let frating = document.getElementById("rating-input");
    let ftext = document.getElementById("comment-input");

    let newReviewCard = {
        name: fname.value,
        date: fdate.value,
        rating: frating.value,
        text: ftext.value
    }

    reviewData.push(newReviewCard);

    let reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    let reviewName = document.createElement("h2");
    reviewName.classList.add("review-name");
    reviewName.innerText = newReviewCard.name;
    reviewCard.appendChild(reviewName);

    let reviewDate = document.createElement("time");
    reviewDate.classList.add("review-date");
    reviewDate.setAttribute("datetime", newReviewCard.date);
    reviewDate.innerText = newReviewCard.date;
    reviewCard.appendChild(reviewDate);

    let reviewRating = document.createElement("span");
    reviewRating.classList.add("review-rating");
    let stars = newReviewCard.rating;
    let isHalf = false;
    for (let i = 0; i < Math.floor(stars); i++) {
        reviewRating.innerHTML += `<span class="material-icons">
        star
        </span>`;
    }
    if (stars % 1 !== 0) {
        reviewRating.innerHTML += `<span class="material-symbols-outlined">star_half</span>`;
        isHalf = true;
    }
    for (let j = isHalf ? Math.ceil(stars) : Math.floor(stars); j < 5; j++) {
        reviewRating.innerHTML += `<span class="material-symbols-outlined">star</span>`;
    }
    reviewCard.appendChild(reviewRating);

    let reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.innerText = newReviewCard.text;
    reviewCard.appendChild(reviewText);
    

    reviewSection.appendChild(reviewCard);

    fname.value = "";
    fdate.value = "";
    frating.value = "";
    ftext.value = "";
}

const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const percentScrolled = scrollTop / (scrollHeight - clientHeight) * 100;

    progressBar.style.width = `${percentScrolled}%`;
});

// I tried to do the thing where the review stays on screen, but didn't work as expected.That's why the code is a little long. Probably should'nt have wasted time doing that. :)