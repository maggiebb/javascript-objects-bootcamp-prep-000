var playlist = {"Beatles":"Penny Lane"};

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign(playlist,{
    [artistName]: songTitle
  })
}


