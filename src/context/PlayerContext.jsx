import { createContext, useRef, useState } from "react";
import { FetchAPI } from "../utils/FetchAPI";
import { useEffect } from "react";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  
  const seekBar = useRef();
  const seekBg = useRef();

  const [track, setTrack] = useState(data && data[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [list, setList] = useState(null);

  useEffect(() => {
    setList(null);

    FetchAPI().then((items) => setList(items.data));
  }, []);

  let data = list && json2array(list);
  function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  }
  const audioRef = useRef();
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    play,
    pause,
    list,
    setList,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
