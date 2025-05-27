let janji = new Promise((resolve, reject) => {
  try {
    resolve("berhasil");
  } catch (err) {
    reject(err);
  }
});

janji
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(janji);
