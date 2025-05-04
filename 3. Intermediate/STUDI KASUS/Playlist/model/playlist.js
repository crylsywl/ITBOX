const fs = require("fs");
class Playlist {
  constructor(id, name, songs) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }

  static getData() {
    const playlist = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    return playlist;
  }
  static listPlaylists() {
    const playlist = this.getData();
    let playlists = playlist.map((playlist) => {
      const { id, name, songs } = playlist;
      return new Playlist(id, name, songs);
    });
    playlists.forEach(playlist => {
      const { id, name, songs } = playlist;
      console.log(`Playlist ID: ${id}, Name: ${name}, Songs:`);
      songs.forEach(song => {
        console.log(`  - Song ID: ${song.id}, Song: ${song.song}, Duration: ${song.duration}, Singer: ${song.singer}, `);
      });
    })
  }
}

module.exports = Playlist;
