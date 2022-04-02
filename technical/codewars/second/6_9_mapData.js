const mapData = (data) => {
  const stringToArray = data.split(", ");

  const mappedData = stringToArray.map((item) => {
    const convertToId = item.toLowerCase().split(" ").join("_");

    return { elementId: convertToId, name: item };
  });

  return mappedData;
};

console.log(
  mapData(
    "Daycare Centre, Highchairs, Large Pets Allowed, Pets Allowed, Small Pets Allowed, Supervised Childcare "
  )
);
