import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "Heyy this is krishiv rawat.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTittle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Heyy this is krishiv rawat.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTittle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Heyy this is krishiv rawat.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTittle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
