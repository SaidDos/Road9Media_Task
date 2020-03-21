export const getFilteredServices = (data, name, rating, price) => {
  const clonnedData = JSON.parse(JSON.stringify(data));

  let result = clonnedData.filter(service => {
    if (service.price >= price[0] && service.price <= price[1]) {
      return true;
    }
  });
  return result;
};
