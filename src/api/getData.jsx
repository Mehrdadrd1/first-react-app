const getData = async () => {
  const response = await fetch("http://localhost:8000/");
  const users = response.json();
  console.log("server user", users);
};

export default getData;
