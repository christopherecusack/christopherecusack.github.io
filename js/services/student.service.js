import { students } from '../data/students.js';

export const getSites = (pager, filter = null) => {
    console.log(students);

    return { students };
}