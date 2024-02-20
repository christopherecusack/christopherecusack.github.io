import { students } from '../data/students.js';

export const getSites = (pager, filter = null) => {
    let pageSize = 5;
    let currentPage = 1;

    if (students.length <= pageSize) {
        return {
            students,
            pageSize: pageSize < students.length ? students.length : pageSize,
            displaying: students.length,
            currentPage: currentPage,
            numberOfPages: 1,
            totalRecords: students.length
        };
    } else {
        let { skip, limit } = pager;
    }
}