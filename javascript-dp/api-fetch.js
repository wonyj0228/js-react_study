//json placeholer
async function getDate() {
  let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getDate();
