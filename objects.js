var playlist = {Beatles:"Penny Lane"};
function updatePlaylist (playlist, name, title){
  return Object.assign({},playlist,{name:title})
}
updatePlaylist (playlist);