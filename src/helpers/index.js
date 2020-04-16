export const getYear = (date) => {
    if(!date) return "";
    const d = new Date(date);
    return d.getFullYear();
}