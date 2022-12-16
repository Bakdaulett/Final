var output = document.querySelector('#friend-output');
var input = document.querySelector('#friendName');
var form = document.querySelector('#new-friend');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var li = '<li class="list-group-item">' + input.value + '</li>';

    output.insertAdjacentHTML('afterbegin', li);

    input.value = '';
});