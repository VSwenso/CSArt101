// index.js - lab 13: Loops  
// Author: Tory Swenson
// Date: 5/24/23

// Constants 

//Functions

//this is an example of a functiom 
function myFunction(param1, param2) {
  //some code here
  //return results;
}

function main() {
  import { axios } from "@pipedream/platform"
  export default defineComponent({
    props: {
      swapi: {
        type: "app",
        app: "swapi",
    }
  },
    async run({steps, $}) {
      return await axios($, {
        url: `https://swapi.dev/api/films/1/`,
    })
  },
})
}
main();
