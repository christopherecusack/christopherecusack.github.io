import { $ } from './dom.js';
import * as StudentService from './services/student.service.js';
import * as Contact from './contact.js';
import { init } from './audio.js';

const studentLinks = $('#student-sites');
const pager = $('#pager');
const siteFilter = $('#site-filter');

let studentLinkData = StudentService.getSites({ skip: 0 });
let search = '';

const loadStudentSites = () => {
    studentLinks.innerHTML = '';

    for (const site of studentLinkData.students) {
        studentLinks.innerHTML += `<div><h4>${site.name}</h4><div>${site.class}</div><div><a href="${site.website}" target="_blank">${site.website}</a></div></div><br />`;
    }

    if (studentLinkData.students.length === 0) {
        studentLinks.innerHTML = '<span>No submissions found</span>';
    }
}

const buttonBuilder = count => {
    pager.innerHTML = '';

    if (count <= 1) {
        return;
    }

    for (let i = 0; i < count; i++) {
        const btn = document.createElement('button');

        btn.innerText = i + 1;
        btn.classList.add('pbtn');

        btn.setAttribute('data-page', i + 1);
        pager.appendChild(btn);

        btn.onclick = evt => {
            evt.preventDefault();

            page(evt);
        }
    }
}

const removeButtonSelect = () => {
    const btns = $('.pbtn');

    for (const btn of btns) {
        btn.classList.remove('btn-selected');
    }
}

const page = evt => {
    removeButtonSelect();
    const page = evt.target.dataset.page
    const skip = parseInt(page - 1) * StudentService.pageSize;

    evt.target.classList.add('btn-selected');

    studentLinkData = StudentService.getSites({ skip }, search);

    loadStudentSites();
}

siteFilter.onkeyup = evt => {
    search = evt.target.value;
    studentLinkData = StudentService.getSites({ skip: 0 }, search);

    buttonBuilder(studentLinkData.numberOfPages);
    loadStudentSites();
}

init();
Contact.init();
loadStudentSites();
buttonBuilder(studentLinkData.numberOfPages);
