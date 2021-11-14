import { addDays, getDateString } from "../helper/date";
import { delay } from "./delay";

const API_URL = "http://localhost:4000";

export async function getPublicEvents() {
  let Events = await fetch(API_URL + "/api/events/public/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return Events;
}

export async function getEvent(ID) {
  let Events = await fetch(API_URL + "/event/view/" + ID, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return Events;
}
