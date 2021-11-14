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

export async function joinTeam(eventid, teamid, student, skills = []) {
  let body = {
    event_id: eventid,
    email: student,
    team_id: teamid,
    skills: skills,
  };
  let Teams = await fetch(API_URL + "/event/team/join/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((response) => response.json())
    .then((data) => data);
  return Events;
}

export async function login(email, password) {
  // TODO: get logged in and set the store variable
}
