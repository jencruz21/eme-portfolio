import { useEffect } from "react";
import "./assets/css/style.css";
import NET from "vanta/src/vanta.net";
import { ReactTyped } from "react-typed";

function App() {
  useEffect(() => {
    NET({
      el: "#app",
      color: "#fff",
      backgroundColor: "#03002E",
      points: 9,
      maxDistance: 20,
      spacing: 18,
      scale: 1,
    });
  }, []);

  return (
    <div className="app">
      <div className="container" id="app">
        <ReactTyped
          strings={[
            "Hello, I'm Jorgen Cruz",
            "I'm a Software Engineer",
            "So a new portfolio?",
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
          showCursor={true}
        >
          <input
            className="header-title"
            type="text"
            autoFocus
            onBlur={({ target }) => {target.focus()}}
          />
        </ReactTyped>
      </div>
    </div>
  );
}

export default App;
