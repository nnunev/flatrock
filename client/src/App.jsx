//import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  
  
  return (
    


      <ApolloProvider client={client}>
        <Router>
            <div className="container bg-light p-0 mb-4">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/user/:id' element={<User />} />
              <Route path='*' element={<NotFound/>}/>
              
            </Routes> 
            </div>
        </Router>  
      </ApolloProvider>
    
  );
}

export default App;
