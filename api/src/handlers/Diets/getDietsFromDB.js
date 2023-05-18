const { Diet } = require("../../db");

const getDietsFromDB = async () => {
  try {
    const dietsAll = await Diet.findAll({
      attributes: ["name", "id"],
    });

    return dietsAll;

    // console.log(dietsAll);
    // const dietsAllArray = [];

    // dietsAll.forEach((diet) =>
    //   dietsAllArray.push({ name: diet.name, id: diet.id })
    // );

    // return dietsAll;
  } catch (error) {
    throw new Error("getDietsFromDB");
  }
};

module.exports = getDietsFromDB;
