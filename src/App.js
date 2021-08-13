import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import videomp from './Myvideo.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth:'100vw'}}>
          <h1 className="title red"> Nawel TAJOURI </h1> 
          <br/>
          <img src= { imageInSrc } alt="profile" style={{maxWidth:'500px', minHeight:'500px'}} />
          <br/>
          <img src="/imageInPublic.jpg" style={{maxWidth:'500px', minHeight:'500px'}} />
          <br/>
       </div>
       <br/>
       <video width="320" height="240" controls>
      <source src={ videomp } type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
