import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Newpost from "./Newpost";
import Postpost from "./Postpost";
import Nav from "./Nav";
import {  Route, Routes} from "react-router-dom";
import Editpost from "./Editpost";
import useAxiosFetch from "./hooks/useaxiosfetch";
import { useState } from "react";
import { DataProvider } from "./context/DataContext";








function App() {
 
 


  return (
    <div className="App">
      
                
     
                  <Header tittle="Musraf Social Media" />
                  <Nav />
                    <Routes>
                                  <Route path="/" element={<Home />}/>
                            <Route path="/post">
                                  <Route index element={ <Newpost 
                                 />}/>
                                    <Route path=":id" element={ <Postpost/>}/>
                              </Route>
                              <Route path="/about" element={ <About />}/>
                              
                              <Route path="*" element={<Missing /> }/>
                              <Route path="/edit/:id" element={<Editpost/>}/>
                    </Routes>

                
                  <Footer/>    
              
    </div>
  );
}


export default App;
