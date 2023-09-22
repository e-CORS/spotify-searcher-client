export default function ShowSongListFromAlbum({
  albumSongList,
  showSearchForm,
}) {
  const millisToMinutesAndSeconds = (msDuration) => {
    const minutes = Math.floor(msDuration / 60000);
    const seconds = ((msDuration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  const goBack = () => {
    showSearchForm();
  };
  return (
    <div className="w-full flex justify-center flex-col items-start p-24">
      <p onClick={() => goBack()} className="cursor-pointer">
        {" "}
        {"< Go back"}
      </p>
      {albumSongList && albumSongList?.length > 0 && (
        <div className="my-4 w-full">
          <ul className="grid grid-cols-4 gap-5 mt-8 items-center w-full">
            {albumSongList.map((song) => (
              <li
                key={song.name}
                className="flex flex-row items-center justify-start gap-2"
              >
                <span>{song.name}</span>
                <span>{millisToMinutesAndSeconds(song.duration_ms)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
