import { enhancedFetch } from "./lib/fetch.js";
import "./polyfill.js";

async function fetchUser(id) {
  //We have to do the scope bind
  const fetch = enhancedFetch.bind(window);
  //const [responseError, response] ?= await fetch(
  // "https://jsonplaceholder.typicode.com/users/" + id
  //);
  const [responseError, response] = await fetch[Symbol.result](
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  if (responseError) {
    // console.log("Error fetching user!", responseError);
    throw new Error("Fetching user failed THROWN");
  }

  //We have to do the scope bind
  const json = response.json.bind(response);

  //const [jsonError, data] ?= await json();
  const [jsonError, data] = await json[Symbol.result]();

  if (jsonError) {
    // console.log("JSON parse failed", jsonError);
    throw new Error("User JSON parse failed");
  }

  return data;
}

(async () => {
  //const [error, user] ?= await fetchUser(11);
  const [error, user] = await fetchUser[Symbol.result](11);

  if (error) {
    console.log("Fetching user failed 1", error);
  } else {
    console.log("Fetched User", user);
  }
})();
