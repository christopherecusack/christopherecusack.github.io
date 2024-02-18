export const $ = (selector) => {
    const query = document.querySelectorAll(selector);

    if (query.length == 1)
        return query[0];
    else
        return query;
}