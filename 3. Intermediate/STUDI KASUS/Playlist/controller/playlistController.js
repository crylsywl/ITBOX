const Playlist = require("../model/playlist");
class PlaylistController {
  static addPlaylist() {
    console.log("add playlist");
  }
  static addSong() {
    console.log("add song");
  }
  static removeSong() {
    console.log("remove song");
  }
  static addToPlaylist() {
    console.log("add to playlist");
  }
  static removeFromPlaylist() {
    console.log("remove from playlist");
  }
  static listPlaylists() {
    Playlist.listPlaylists();
  }
}

module.exports = PlaylistController;
