class Song {
  constructor(id, name, duration, singer) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.singer = singer;
  }
}

class Pop extends Song {
  constructor(id, name, duration, singer) {
    super(id, name, duration, singer, "Pop");
  }
}

module.exports = Song;
