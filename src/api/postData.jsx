const postData = async (data) => {
  try {
    const responseJSON = await fetch("http://localhost:8000/registered", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await responseJSON.json();
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default postData;
