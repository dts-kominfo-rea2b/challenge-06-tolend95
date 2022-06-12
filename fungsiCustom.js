// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const fs = require("fs");
  const data = fs.readFileSync(file1, "utf8");
  const data2 = fs.readFileSync(file2, "utf8");
  const data3 = fs.readFileSync(file3, "utf8");
  const result = [];
  const dataJson = JSON.parse(data);

  data((err, data) => {
    if (err) {
      console.log(`Error happen, cause: ${err}`);
    } else {
      msgData = dataJson(data).message;
      result[0] = msgData.split(" ")[0];
    }
  });
  data2((err, data) => {
    if (err) {
      console.log(`Error happen, cause: ${err}`);
    } else {
      msgData = dataJson(data).message;
      result[1] = msgData.split(" ")[1];
    }
  });
  data3((err, data) => {
    if (err) {
      console.log(`Error happen, cause: ${err}`);
    } else {
      msgData = dataJson(data).message;
      result[2] = msgData.split(" ")[2];
    }
  });
  fnCallback(err, result);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
