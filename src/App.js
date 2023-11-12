import "./App.css";

//import { Header } from "./components/Header";
//import { Set } from "./components/Set";

import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";
import { PageViewSet } from "./components/pageSet/PageViewSet";
import { PageCreateSet } from "./components/pageSet/PageCreateSet";
import { PageSelectSet } from "./components/pageSet/PageSelectSet";

import { FormCreateSet } from "./components/form/FormCreateSet";
import { FormCreateCard } from "./components/form/FormCreateCard";
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>}/>
        <Route path="/set/:id" element={<PageViewSet/>}/>
        <Route path="/admin" element={<PageCreateSet/>}> 
          <Route path="createset" element={<FormCreateSet/>}/>
          <Route path="createcard" element={<FormCreateCard/>}/>
        </Route>
        <Route path="*" element={<PageSelectSet/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;