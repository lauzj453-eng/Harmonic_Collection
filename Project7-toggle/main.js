let goingBtn = document.getElementById('going-btn');
let notGoingBtn = document.getElementById('not-going-btn');
let poster = document.getElementById('poster');

goingBtn.addEventListener('click', function() {
    poster.classList.remove('togglesaurus');
});

notGoingBtn.addEventListener('click', function() {
    poster.classList.add('togglesaurus');
});