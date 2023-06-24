export const HOSTNAME = "http://localhost:8090";

export const BOOKS = "/books"
export const CHARACTERS = "/characters"

export const GETHEADERS = (token) => (
    {
        method: "GET",
        headers: {
          'token': token
        }
      }
)