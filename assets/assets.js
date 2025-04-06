import user_image from "./user-image.png";
import vscode from "./vscode.png";
import nextjs from "./nextjs.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import profile_img from "./profile-img.png";
import background1 from "./background1.png";
import school1 from "./school1.jpg";
import school2 from "./school2.jpg";
import school3 from "./school3.jpg";
import school4 from "./school4.jpg";
import profile2 from "./profile2.jpg";

export const assets = {
  user_image,
  vscode,
  nextjs,
  figma,
  git,
  mongodb,
  profile_img,
};

// for non-js files
const assets2 = {
  background1,
  school1,
  school2,
  school3,
  school4,
  profile2,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const toolsData = [
  assets.vscode,
  assets.nextjs,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export default assets2;