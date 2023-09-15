
import Header from "./Header";
import SideBar from "./SideBar";
import SideBarItem from "./SideBarItem";
import { HiOutlineHome, HiOutlineVideoCamera } from "react-icons/hi2";

function MainLayout({ children }) {
  return (
      <div className="bg-gray-200 h-screen">
        <Header />
        {/* <h1>MainLayout</h1> */}
        <div className="flex">
          <SideBar>
            <SideBarItem
              icon={<HiOutlineHome size={20} />}
              text="Home"
              alert
              href="/"
            />
            <SideBarItem icon={<HiOutlineVideoCamera />} text="Video" active />
            <SideBarItem icon={<HiOutlineHome />} text="Home" />
            <SideBarItem icon={<HiOutlineHome />} text="Home" />
          </SideBar>
          {/* <hr /> */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
  );
}

export default MainLayout;
