export function getDateString(date) {
  return new Date(date.valueOf()).toLocaleDateString("en-US");
}

export function addDays(days, start = new Date()) {
  var ret = new Date(this.valueOf());
  ret.setDate(start.getDate() + days);
  return ret;
}
