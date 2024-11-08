
import Router from "./router";
import Profile from '../src/components/Profile'
import Footer from "../src/components/Footer";
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
      <div className="wrapper container w-[1170px] mt-[15px] sm:mt-[60px] mb-0 mx-auto">
        <div className="block lg:grid lg:grid-cols-4">
          <Profile/>
          <div className="col-span-3 px-[15px] mt-[15px] sm:mt-0">
            <Header />
            <Router/>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
