class TodoView {
    static show(todos) {
        console.log("Daftar Peserta:");
        todos.forEach(todo => {
            const { id, name, age, city} = todo;
            console.log(`${id}. ${name}, ${age} tahun, dari ${city}`);
        })

    }
    static add(todos) {
        console.log("Peserta baru telah ditambahkan");
        console.log("Daftar Peserta:");
        todos.forEach(todo => {
            const { id, name, age, city} = todo;
            console.log(`${id}. ${name}, ${age} tahun, dari ${city}`);
        })
    }

    static delete(todos) {
        console.log("Peserta telah dihapus");
        console.log("Daftar Peserta:");
        todos.forEach(todo => {
            const { id, name, age, city} = todo;
            console.log(`${id}. ${name}, ${age} tahun, dari ${city}`);
        })
    }

    static update(todos) {
        console.log("Data peserta telah diupdate")
        console.log("Data Peserta:");
        todos.forEach(todo => {
            const { id, name, age, city} = todo;
            console.log(`${id}. ${name}, ${age} tahun, dari ${city}`);
        })
    }
  static massage(msg) {
    console.log(msg);
  }
}

module.exports = TodoView;