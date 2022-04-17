import http from "./httpServices";

const getProducts = async (offset) => {
  const { data } = await http.get(`?offset=${offset}`);
  return data;
};

export default getProducts;
