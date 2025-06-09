import "./App.css";
import DummyPosts from "./assets/components/DummyPosts";
import { Sidebar }  from "./assets/components/Sidebar";

import Trending from "./assets/components/Trending";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <DummyPosts />
     <Trending />
    </div>
  );
}

export default App;
