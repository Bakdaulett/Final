// TBC
const reviews = [
    {
        id: 1,
        name: "@annajohnson",
        job: "explorer",
        img: "https://images.pexels.com/photos/3496360/pexels-photo-3496360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."'
    },
    {
        id: 2,
        name: "@darryncodes",
        job: "Singer",
        img: "https://i.pinimg.com/736x/c9/b0/74/c9b07436ceb02355580ec23ea18b77d3.jpg",
        text:
            '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."'
    },
    {
        id: 3,
        name: "@lisamona",
        job: "actress",
        img: "https://4tololo.ru/sites/default/files/inline/images/2019/11/01-1502-1643035726.png",
        text:
            '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
    },
    {
        id: 4,
        name: "@kayratnurtas",
        job: "suetolog",
        img: "https://mgorod.kz/wp-content/uploads/2013/06/kairatnurtas.kz_.jpg",
        text:
            '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet.""'
    },
    {
        id: 5,
        name: "@valery",
        job: "footballer",
        img: "https://images.pexels.com/photos/7624986/pexels-photo-7624986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            '"Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."'
    },
    {
        id: 6,
        name: "@jonathan",
        job: "traveler",
        img: "https://images.pexels.com/photos/2917182/pexels-photo-2917182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            '" Gali ipsum dolor sit amet consectetur adipisicing elit. Sint iste, skablbifhl aslkhbfhlkas voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam.""'
    }
];

const img = document.getElementById("img");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    testimonial.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

const progressDone = document.querySelectorAll('.progress-done');

progressDone.forEach(progress => {
    progress.style.width = progress.getAttribute('data-done') + '%';
});


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
