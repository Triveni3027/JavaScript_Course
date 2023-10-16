var user = {
  id: 101,
  name: "Kabir",
  address: {
    city: {
      name: "Hyd",
      area1: "Begumpet",
    },
    state: "TS",
    pincode: 500018, // 500020
  },
};
console.log(user.address);

//upating the nested object
user.address.pincode = 500020;
console.log(user);
console.log("----------" + user.address.city.name + "----------------");

