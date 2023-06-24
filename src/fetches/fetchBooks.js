import {HOSTNAME, BOOKS} from "../globals/serverVariables.js"
import { errorHandling } from "../utilities/errorHandling";

export async function fetchBooks() {
    return await fetch(HOSTNAME + BOOKS)
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
    })
    .catch((error) => {
        errorHandling(error);
    });
}