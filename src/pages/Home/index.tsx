import IconButton from "@components/IconButton";
import {
  FiEye,
  FiEyeOff,
  FiStar,
  FiTrash2,
  FiMoon,
  FiSun,
  FiSettings,
} from "react-icons/fi";

import Sidebar from '@layouts/Sidebar';

const Home = () => {
  return (
    <div className="home-container">
      <div className="main">
        <Sidebar />
        <main className="content">
          <aside>
            <ul>
              <li>My First Note</li>
              <li>My Second Note</li>
            </ul>
          </aside>
          <aside>
            <textarea value={"Test"} />
            <footer>
              <div className="right-footer">
                <IconButton>
                  <FiEye />
                </IconButton>
                <IconButton>
                  <FiEyeOff />
                </IconButton>
                <IconButton>
                  <FiStar />
                </IconButton>
                <IconButton>
                  <FiTrash2 />
                </IconButton>
              </div>
              <div className="left-footer">
                <IconButton>
                  <FiMoon />
                </IconButton>
                <IconButton>
                  <FiSun />
                </IconButton>
                <IconButton>
                  <FiSettings />
                </IconButton>
              </div>
            </footer>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Home;
