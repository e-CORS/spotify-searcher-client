import axios from "axios";

const API_URL = "http://localhost:8081";

export async function searchArtistAlbum(artistName) {
  try {
    const response = await axios.get(
      `${API_URL}/arists-albums?artist=${artistName}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getClickedAlbumSongs(albumId) {
  try {
    const response = await axios.get(
      `${API_URL}/albums-songs?albumId=${albumId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
