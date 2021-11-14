export function getDateString(date = new Date()) {
    return date.toLocaleDateString("en-US");
}

export function addDays(days, start = new Date()) {
    var ret = new Date(this.valueOf());
    ret.setDate(start.getDate() + days);
    return ret;
}