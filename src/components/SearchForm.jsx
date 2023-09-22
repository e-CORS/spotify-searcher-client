"use client";
import React, { useState } from "react";
import {
  searchArtistAlbum,
  getClickedAlbumSongs,
} from "../services/SearchServices";
const SearchForm = ({ hideSearchForm }) => {
  const [artistName, setArtistName] = useState("");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setArtistName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await searchArtistAlbum(artistName);
      setAlbums(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching albums:", error);
      setLoading(false);
    }
  };

  const hideSearchFormOnAlbumClick = async (albumId) => {
    await getClickedAlbumSongs(albumId).then((response) => {
      hideSearchForm(response.data);
    });
  };

  return (
    <div className="w-full flex justify-center flex-col items-start p-24">
      <h2 className="w-fit">Search for your favorite artist's albums 👀</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-start items-center mt-4"
      >
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={handleInputChange}
          placeholder="Daft Punk..."
          required
          className="text-black px-4 w-2/4 h-7"
        />
        <button type="submit" className="ml-4 w-fit">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {albums && albums?.length > 0 && (
        <div className="my-4 w-full">
          <h3>Albums by {artistName}:</h3>
          <ul className="grid grid-cols-4 gap-5 mt-8 items-start w-full">
            {albums.map((album) => (
              <li
                key={album.id}
                className="flex flex-col items-center justify-center cursor-pointer "
                onClick={() => hideSearchFormOnAlbumClick(album.id)}
              >
                <img
                  src={`${album.images[1].url}`}
                  alt="album logo"
                  className="w-60"
                />
                <span>{album.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
