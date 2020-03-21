// here we get data array and filters craiteria and return result from that filtering
// here for example we just filter based on only SERVICE PRICE
export const getFilteredServices = (data, name, rating, price) => {
  const clonnedData = JSON.parse(JSON.stringify(data));

  let result = clonnedData.filter(service => {
    if (service.price >= price[0] && service.price <= price[1]) {
      return true;
    }
  });
  return result;
};
