export default function Card({ pic }) {
  //const [imgLoaded, setImgLoaded] = useState(false);
  //const ratio = imgLoaded.width > imgLoaded.height ? "width" : "height";

  //   useEffect(() => {
  //     const image = new Image();
  //     image.src = pic.src.medium;
  //     image.onload = () => {
  //       setImgLoaded({ width: image.naturalWidth, height: image.naturalHeight });
  //     };
  //   }, [pic.src.medium]);
  return (
    <div className="card-cont">
      <div className="img-cont">
        <img className="image" src={pic.src.large} />
      </div>
      <p>{pic.alt}</p>
    </div>
  );
}

/*
import React from "react";
import { useRef, useState } from "react";

export default function Card({ pic }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const picRef = useRef(null);
  picRef.current &&
    console.log(picRef.current?.offsetWidth, picRef.current?.offsetHeight);
  return (
    <div className="imgCard">
      <img
        className="img"
        ref={picRef}
        src={pic.src.medium}
        onLoad={() => setImgLoaded(true)}
      />
    </div>
  );
}
*/
