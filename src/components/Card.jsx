import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"

function Card({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-700 text-white p-5 overflow-hidden">
      <LuFileSpreadsheet />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between mb-3 py-1 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose color="#000" />
            ) : (
              <FiDownload size=".8em" color="#000" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold ">{data.tag.tagTittle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
