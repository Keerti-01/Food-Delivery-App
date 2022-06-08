
//importing HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";

//importing components
import Navbar from "./Components/Navbar";

function App() {
  return <>
    
      <HomeLayoutHoc component={Navbar} path="/" /> 
    
  </>
}

export default App;
 
// <> </> ====> its known as fragment
//component --> will be our centter component which willbe varying

//delivery
//diningout
//nightlife
//nutrition

//master -> url parameter