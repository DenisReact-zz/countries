export const getAllCountries = async () => {
  const responce = await fetch("https://restcountries.com/v3.1/all");
  const data = await responce.json();
  return data;
};

export const getCountriesByName = async (str = "ukraine") => {
  const responce = await fetch(`https://restcountries.com/v3.1/name/${str}`);
  const data = await responce.json();
  return data;
};
