async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); //비동기 앞 await
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}
