import planet01 from "./assets/images/planet-01.png";
import planet02 from "./assets/images/planet-02.png";
import planet03 from "./assets/images/planet-03.png";
import planet04 from "./assets/images/planet-04.png";
import planet05 from "./assets/images/planet-05.png";
import planet06 from "./assets/images/planet-06.png";
import planet07 from "./assets/images/planet-07.png";
import planet08 from "./assets/images/rocket.png";
import planet09 from "./assets/images/planet-09.png";

import Parallax from 'parallax-js'
import React from "react";
import './App.css';

function App() {

  React.useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene3');
    var parallaxInstance = new Parallax(scene);


    var scene = document.getElementById('scene4');
    var parallaxInstance = new Parallax(scene);


    var scene = document.getElementById('scene5');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene6');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene7');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene8');
    var parallaxInstance = new Parallax(scene);

    var scene = document.getElementById('scene9');
    var parallaxInstance = new Parallax(scene);

   

  }, [])





  return (
    <section className="banner">
      <div className="container">
        <div id="scene">
          <div className="layer" data-depth="50">
            <img src={planet01} />
          </div>
        </div>

        <div id="scene2">
          <div className="layer" data-depth="50">
            <img src={planet02} />
          </div>
        </div>

        <div id="scene3">
          <div className="layer" data-depth="50">
            <img src={planet03} />
          </div>
        </div>


        <div id="scene4">
          <div className="layer" data-depth="50">
            <img src={planet04} />
          </div>
        </div>


        <div id="scene5">
          <div className="layer" data-depth="50">
            <img src={planet05} />
          </div>
        </div>


        <div id="scene6">
          <div className="layer" data-depth="50">
            <img src={planet06} />
          </div>
        </div>


        <div id="scene7">
          <div className="layer" data-depth="50">
            <img src={planet07} />
          </div>
        </div>


        <div id="scene8">
          <div className="layer" data-depth="50">
            <img src={planet08} />
          </div>
        </div>

        <div id="scene9">
          <div className="layer" data-depth="50">
            <img src={planet09} />
          </div>
        </div>


      </div>
    </section>
  );
}

export default App;
