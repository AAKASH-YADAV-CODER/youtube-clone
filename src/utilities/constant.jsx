import React from "react";

import { SiYoutubeshorts } from "react-icons/si";
import { AiFillHome} from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiLightbulbLine } from "react-icons/ri";


export const categories = [
    { name: "Home", icon: <AiFillHome />, type: "home" },
    { name: "Shorts", icon: <SiYoutubeshorts />, type: "category" },
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    // { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
];

export const TagsButtonConstant=["ALL","IAS","IPS","DATA STRUCTURE","OOPS","COMPUTER NETWORKING","OPERATING SYSTEM","JAVASCRIPT","NODEJS","NEXTJS","SQL","MONGODB","REACT","REDUX","C++","MOTIVATIONAL"]