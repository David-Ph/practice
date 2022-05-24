const _ = require("lodash");

const paginateData = (data, currentPage, rowsPerPage, totalItems) => {
  const startIndex = currentPage * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems);

  return data.slice(startIndex, endIndex);
};

const array = [
  {
    id: 1,
    first_name: "Luu",
    last_name: "Nguuyen",
    email: "luu.nguyen@zenrooms.com",
  },
  {
    id: 2,
    first_name: "David",
    last_name: "Phang",
    email: "david.phang@zenrooms.com",
  },
  {
    id: 3,
    first_name: "Fey",
    last_name: "Syllenae",
    email: "fey.syllenae@zenrooms.com",
  },
];

const filteredData = _.filter(array, (data) => {
  return _.find(data, )
})
const paginatedData = paginateData(array, 1, 2, 3);

console.log(paginatedData)
