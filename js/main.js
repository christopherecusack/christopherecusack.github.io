import { $ } from './dom.js';
import * as StudentService from './services/student.service.js';
import * as Contact from './contact.js';
import { init } from './audio.js';

const studentLinks = $('#student-sites');
const studentLinkData = StudentService.getSites();

const loadStudentSites = () => {
    for (const site of studentLinkData.students) {
        studentLinks.innerHTML += `<div><h4>${site.name}</h4><div>${site.class}</div><div><a href="${site.website}" target="_blank">${site.website}</a></div></div><br />`;
    }
}

init();
Contact.init();
loadStudentSites();
