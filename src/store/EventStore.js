import { writable } from "svelte/store";

const EventStore = writable(
    {
        "public": true,
        "pin": "",
        "title": "",
        "description": "",
        "maxteamsize": -1,
        "maxparticipants": -1,
        "start": null,
        "end": null,
        "owner": "",
        "teams": [],
        "tags": []
    }
);

export default EventStore;