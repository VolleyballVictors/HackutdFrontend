import { addDays, getDateString } from "../helper/date";
import { delay } from "./delay";

export async function getEvent(id) {
    await delay();
    return {
        "public": true,
        "pin": "",
        "title": id,
        "description": "Hackathon",
        "maxteamsize": 4,
        "maxparticipants": -1,
        "start": getDateString(),
        "end": getDateString(addDays(10)),
        "owner": "test@utdallas.edu",
        "teams": [],
        "tags": []
    }
}