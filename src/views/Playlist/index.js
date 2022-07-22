import React, { useState, useEffect } from "react";
import { getCurrentPlaylist } from "../../services/playlistService";
import { convertMsToTime } from "../../utils/convertMs";
import CardTrackPlayer from "../../components/CardTrackPlayer";
import "../../assets/styles/playlist.scss";
import Time from "../../assets/img/time.png";

const Index = () => {
  const [tracks, setTracks] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [loading, setLoading] = useState(1);
  const [duration, setDuration] = useState(0);
  let position = 1;

  useEffect(() => {
    getCurrentPlaylist(window.location.pathname.split("/")[2])
      .then((res) => {
        let durationTmp = 0;
        let currentPlaylistTmp = res.data;
        res.data.tracks.items.map((item) => {
          if (item.track != null) {
            durationTmp += parseInt(item.track.duration_ms, 10);
          } else {
            currentPlaylistTmp.tracks.total =
              currentPlaylistTmp.tracks.total - 1;
          }
        });
        console.log(currentPlaylistTmp);
        setCurrentPlaylist(currentPlaylistTmp);
        setTracks(res.data.tracks.items);
        setDuration(convertMsToTime(durationTmp));
      })
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <div className="container-current-playlist">
      {currentPlaylist.id ? (
        <>
          <div className="container-header">
            <div className="container-img">
              <img src={currentPlaylist.images[0].url} alt="" />
            </div>
            <div className="container-text">
              <p>Playlist</p>
              <p>{currentPlaylist.name}</p>
              <p>{currentPlaylist.description}</p>
              <p>
                Spoutnify • {currentPlaylist.followers.total} followers •{" "}
                {currentPlaylist.tracks.total} titres, {duration}
              </p>
            </div>
          </div>
          <div className="container-tracks">
            <div className="container-top">
              <p>#</p>
              <p>Titre</p>
              <p>Album</p>
              <div>
                <img src={Time} />
              </div>
            </div>
            <div className="container-bottom">
              {tracks.map((track) => {
                let artistTmp = "";
                track.track.artists.map((artist) => {
                  if (artistTmp) {
                    artistTmp += `, ${artist.name}`;
                  } else {
                    artistTmp = artist.name;
                  }
                });
                return (
                  <CardTrackPlayer
                    key={track.track.id}
                    id={track.track.id}
                    position={position++}
                    durations_ms={track.track.duration_ms}
                    imageAlbum={track.track.album.images[2].url}
                    nameAlbum={track.track.album.name}
                    nameArtist={artistTmp}
                    nameTrack={track.track.name}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;
