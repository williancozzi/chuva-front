let showButton = document.querySelector('#showButton');

showButton.onclick = function () {
    let div = document.getElementById('resume');
    if (div.style.maxHeight <= '11%') {
        div.style.maxHeight = '26%';
    }
    else {
        div.style.maxHeight = '11%';
    }
};