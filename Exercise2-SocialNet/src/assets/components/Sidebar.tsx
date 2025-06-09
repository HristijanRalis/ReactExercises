import "../styles/sidebar.css";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";

export const Sidebar = () => {

 return (
    <div className="sidebar">
      <div className="sidebar_logo-container">
        <BsTwitterX className="sidebar_logo" />
      </div>
      <div className="sidebarOption"><GoHomeFill className="sidebarOption_icon" /> Home</div>
      <div className="sidebarOption"><FaHashtag className="sidebarOption_icon" /> Explore</div>
      <div className="sidebarOption"><IoMdNotificationsOutline className="sidebarOption_icon" /> Notifications</div>
      <div className="sidebarOption"><HiOutlineEnvelope className="sidebarOption_icon" /> Messages</div>
      <div className="sidebarOption"><BiBookmark className="sidebarOption_icon" /> Bookmarks</div>
      <div className="sidebarOption"><RiFileList2Line className="sidebarOption_icon" /> Lists</div>
      <div className="sidebarOption"><HiOutlineUser className="sidebarOption_icon" /> Profile</div>
      <div className="sidebarOption"><CiCircleMore className="sidebarOption_icon" />More</div>
      <button className="sidebarTweet">Tweet</button>
    </div>
  );

}
