const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require("./controller/playlistController");
const View = require("./view/view");

switch (command) {
  case "addPlaylist":
    PlaylistController.addPlaylist();
    break;
  case "addSong":
    PlaylistController.addSong();
    break;
  case "removeSong":
    PlaylistController.removeSong();
    break;
  case "addToPlaylist":
    PlaylistController.addToPlaylist();
    break;
  case "removeFromPlaylist":
    PlaylistController.removeFromPlaylist();
    break;
  case "listPlaylists":
    PlaylistController.listPlaylists();
    break;
  default:
    View.massage(
      "command not found, please use one of the following commands: addPlaylist, addSong, removeSong, addToPlaylist, removeFromPlaylist, listPlaylists"
    );
    break;
}
