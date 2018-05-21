import Track from "../components/Track/Track";

let accessToken = '';
const clientID ='c0ab0a12fd2b4244a4a56ec8e5887266';
const redirectedUri = "http://localhost:3000/";

const Spotify = {
    
    search(term){
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }

        }).then(response =>{
            return response.json();
        }).then(jsonResponse => {
           if(jsonResponse.tracks){
               return jsonResponse.Tracks.map(track =>({

                id: track.id,
                name: track.name,
                artis: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
                
               }));
            }
           }); 
           },
    
    savePlaylist(name,uri){
        if(name === '' && uri === ''){
            return;
            }
        else{
            return;
        }
    },
    
    getAccesToken(){
        if(accessToken){
            return accessToken;
        }
         
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
        }
        else
        {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectedUri}`;
        window.location = accessUrl;
        }
          }
};

export default Spotify;
