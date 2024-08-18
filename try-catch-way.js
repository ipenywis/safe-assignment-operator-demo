import { enhancedFetch } from "./lib/fetch.js";

async function fetchUser(id) {
  //We have to do the scope bind
  const fetch = enhancedFetch.bind(window);
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    //We have to do the scope bind
    const json = response.json.bind(response);
    const data = await json();

    return data;
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const user = await fetchUser(11);
    console.log("Fetched User", user);
  } catch (error) {
    console.log("Fetching user failed", error);
  }
})();
