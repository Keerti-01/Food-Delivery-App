import {Route, Navigate} from "react-router-dom"

//importing HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";

//importing components
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home"

function App() {
  return (<>
      {/* <Route exact path="/">
        <Navigate to="/delivery"/>
      </Route> */}
      {/* <Route path="/" element={<Navigate replace to="/delivery" />} /> */}
      {/* <Navigate to="/delivery"  /> */}
      {/* <HomeLayoutHoc component={Temp} path="/" />  */}

      {/* <Route path="/" element={<Navigate to ="/delivery" />}/> */}
      <HomeLayoutHoc component={Home} path="/:type" /> 
    
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