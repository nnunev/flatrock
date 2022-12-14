//import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Client from "./pages/Client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    
      <ApolloProvider client={client}>
        <Router>
          <Header />
            <div className="container bg-light p-0 mb-4">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/client/:id' element={<Client />} />
              <Route path='*' element={<NotFound/>}/>
              
            </Routes> 
            </div>
        </Router>  
      </ApolloProvider>
    
  );
}

export default App;
