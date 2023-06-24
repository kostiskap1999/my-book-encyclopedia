import {HOSTNAME, CHARACTERS} from "../globals/serverVariables.js"
import { errorHandling } from "../utilities/errorHandling.js";

export async function fetchCharacters() {
    
    return await fetch(HOSTNAME + CHARACTERS)
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
    })
    .catch((error) => {
        errorHandling(error);
    });
}