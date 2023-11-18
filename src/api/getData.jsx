const getData = async () => {
  const response = await fetch("http://localhost:3030/");
  const users = response.json();
  console.log("server user", users);
};

export default getData;
