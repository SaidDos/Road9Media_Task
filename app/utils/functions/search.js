// local search about services based on SERVICE NAME regardless uppercase or lowecase
export const search = (data, searchTerm) => {
  const clonnedData = JSON.parse(JSON.stringify(data));

  if (searchTerm.length) {
    let term = searchTerm.toLowerCase();

    let result = clonnedData.filter(service => {
      if (service.name.toLowerCase().includes(term)) {
        return true;
      }
    });
    return result;
  }
};
