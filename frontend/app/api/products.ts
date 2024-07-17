const endpoit: string = "http://localhost:3333/";

const getProducts = async () => {
  try {
    const response = await fetch(`${endpoit}products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getProducts };