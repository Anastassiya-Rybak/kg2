// Импортировать все плагины
import * as bootstrap from 'bootstrap';

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.gellary-imgs');

const changeClass = el => {
    for (i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.add('d-none');
        if (content[i].dataset.content === currTab) {
            content[i].classList.remove('d-none');
            content[i].classList.add('d-flex');
        }
    } 
});