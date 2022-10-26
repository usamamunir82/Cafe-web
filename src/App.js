
import Header from "./components/header/header";
import Flavor from "./components/Flavor-Page/Flavor";
import FavoriteCofee from "./components/favorite-cofee/FavoriteCofee";
import TalkAbout from "./components/TalkAbout/TalkAbout";
import Afternoon from "./components/afternoon/Afternoon";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Flavor/>
      <FavoriteCofee/>
      <TalkAbout/>
      <Afternoon/>
      <Footer/>
     
    </div>
  );
}

export default App;
