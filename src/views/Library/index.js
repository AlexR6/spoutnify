import React, { useEffect, useState } from "react";
import { getAllPlaylistUser } from "../../services/playlistService";
import CardPlaylist from "../../components/CardPlaylist";
import NoPictureForPlaylist from "../../assets/img/no-picture-for-playlist.png";
import "../../assets/styles/library.scss";

const Index = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    getAllPlaylistUser()
      .then((res) => setPlaylists(res.data.items))
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <div className="container-playlist-user">
      <div className="container-playlist">
        {playlists.map((playlist) => {
          const image = playlist.images[0]
            ? playlist.images[0].url
            : NoPictureForPlaylist;
          return (
            <CardPlaylist
              key={playlist.id}
              id={playlist.id}
              img={image}
              name={playlist.name}
              description={playlist.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
