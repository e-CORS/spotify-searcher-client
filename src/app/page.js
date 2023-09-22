"use client";
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ShowSongListFromAlbum from "../components/ShowSongListFromAlbum";
export default function Home() {
  const [displaySearchForm, setDisplaySearchForm] = useState(true);
  const [albumSongList, setAlbumSongList] = useState([]);
  const hideSearchForm = (trackList) => {
    setDisplaySearchForm(false);
    setAlbumSongList(trackList);
  };
  const showSearchForm = () => {
    setDisplaySearchForm(true);
    setAlbumSongList([]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {displaySearchForm && <SearchForm hideSearchForm={hideSearchForm} />}
      {!displaySearchForm && (
        <ShowSongListFromAlbum
          albumSongList={albumSongList}
          showSearchForm={showSearchForm}
        />
      )}
    </main>
  );
}
