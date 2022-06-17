import {Route, Routes, Navigate} from "react-router-dom"

//importing HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestuarantLayoutHoc from "./HOC/RestuarantHOC";

//importing components
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home"
import Overview from "./Page/Restuarant/Overview"
import OrderOnline from "./Page/Restuarant/OrderOnline";
import Reviews from "./Page/Restuarant/Reviews";
import Menu from "./Page/Restuarant/Menu";
import Photos from "./Page/Restuarant/Photos";

function App() {
  return (<>
      
      <Routes>
        <Route path="/" element={<Navigate to ="/delivery" />}/>
      </Routes>
      
      <HomeLayoutHoc  path="/:type" exact component={Home}  /> 

      <Routes>
        <Route path="/restuarant/:id" element={<Navigate to ="/restuarant/:id/overview" />}/>
      </Routes>

      <RestuarantLayoutHoc  path="/restuarant/:id/overview" exact component={Overview}  />
      <RestuarantLayoutHoc  path="/restuarant/:id/order-online" exact component={OrderOnline}  />
      <RestuarantLayoutHoc  path="/restuarant/:id/menu" exact component={Menu}  />
      <RestuarantLayoutHoc  path="/restuarant/:id/reviews" exact component={Reviews}  />
      <RestuarantLayoutHoc  path="/restuarant/:id/photos" exact component={Photos}  />
      
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

// {/* <Route exact path="/">
//         <Navigate to="/delivery"/>
//       </Route> */}
//       {/* <Route path="/" element={<Navigate replace to="/delivery" />} /> */}
//       {/* <Navigate to="/delivery"  /> */}
//       {/* <HomeLayoutHoc component={Temp} path="/" />  */}

//       {/* <Route path="/" element={<Navigate to ="/delivery" />}/> */}