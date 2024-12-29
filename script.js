// document.querySelector('.ri-menu-3-line').onclick = function() {
//     let list = document.getElementById('id2');
//     if (list.style.display === 'block') {
//         list.style.display = 'none';
//     } else {
//         list.style.display = 'block';
//     }
//     console.log(list.innerText);
// }

document.querySelector('.ri-menu-3-line').onclick = function() {
    let list = document.getElementById('id2');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}

document.getElementById('close-btn').onclick = function() {
    document.getElementById('id2').style.display = 'none';
}