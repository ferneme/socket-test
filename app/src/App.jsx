import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";
import Card from "./assets/Card";
import data from "./assets/seed";

const socket = io("https://be-socket-s6m3.onrender.com/", {
  transports: ["websocket", "xhr-polling"],
});

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    socket.on("msg", (data) => console.log(data));
    return () => {
      socket.off();
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    // fetch("https://api.pexels.com/v1/search?query=parks", {
    //   headers: {
    //     Authorization:
    //       "oTMZUqxuqQpPerjw8b0JaIHXcmlfAOn2DHYBcg8RU6iiWCYt3K0fpKLQ",
    //   },
    // }).then(async (resp) => {
    //   setPhotos((await resp.json()).photos);
    // });
    setPhotos(JSON.parse(data));
  }, []);

  return (
    <>
      <h2>Image Gallery</h2>
      <div className="cont">
        {photos.map((photo) => {
          return <Card key={photo.id} pic={photo} />;
        })}
      </div>
    </>
  );
}

export default App;
