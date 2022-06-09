
//importing HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";

//importing components
import Master from "./Components/master";
import Temp from "./Components/temp";

function App() {
  return (<>
    
      <HomeLayoutHoc component={Temp} path="/" /> 
      <HomeLayoutHoc component={Master} path="/:type" /> 
    
  </>)
}

export default App;
 
// <> </> ====> its known as fragment
//component --> will be our centter component which willbe varying

//delivery
//diningout
//nightlife
//nutrition

//master -> url parameter

// :type --> delivery / diningout / nightlife / nutrition
//master will be passed inside component and master will look for type paramter, depending on paramter it wil render
// the pages