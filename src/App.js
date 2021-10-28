import './App.scss';
import './assets/flicker-animation.scss'
import HomeSection from "./sections/home"
import Header from "./sections/header"

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection/>
    </div>
  );
}

export default App;
