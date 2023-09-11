import { PiUserLight } from "react-icons/pi"
import { PiBookmarksSimpleThin } from "react-icons/pi"
import { CgNotes } from "react-icons/cg"
import { TfiBarChart } from "react-icons/tfi"




export default [
    { icon: <PiUserLight />,  title: "Profile", id:Math.random()},
    { icon: <PiBookmarksSimpleThin />,  title: "Library", id:Math.random()},
    { icon: <CgNotes />,  title: "Stories", id:Math.random()},
    { icon: <TfiBarChart />,  title: "Stats", id:Math.random()},
]