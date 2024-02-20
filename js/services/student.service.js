import { students } from '../data/students.js';

export const pageSize = 5;

export const getSites = (pager, filter = null) => {
    let currentPage = 1;

    // if (students.length <= pageSize) {
    //     return {
    //         students,
    //         pageSize: pageSize < students.length ? students.length : pageSize,
    //         displaying: students.length,
    //         currentPage: currentPage,
    //         numberOfPages: 1,
    //         totalRecords: students.length
    //     };
    // } else {
        let { skip } = pager;

        if (!!filter) {
            let studentsFilter = students
                .filter(site => site.name.toLowerCase().startsWith(filter.toLowerCase()))

            let studentsPaged = studentsFilter.slice(parseInt(skip), parseInt(skip) + pageSize);

            return {
                students: studentsPaged,
                pageSize: pageSize < studentsPaged.length ? studentsPaged.length : pageSize,
                displaying: studentsPaged.length,
                currentPage: currentPage,
                numberOfPages: Math.ceil(studentsFilter.length / pageSize),
                totalRecords: studentsFilter.length
            };
        } else {
            return {
                students: students.slice(parseInt(skip), parseInt(skip) + pageSize),
                pageSize: pageSize < students.length ? students.length : pageSize,
                displaying: students.length,
                currentPage: currentPage,
                numberOfPages: Math.ceil(students.length / pageSize),
                totalRecords: students.length
            };
        }
    //}
}