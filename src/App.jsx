import Layout from "./layouts/Layout.jsx";
import Books from "./components/Books.jsx";
import { useState  , useEffect } from "react";


function App() {
  
  const [mood , setMood] = useState(false) ; 
  useEffect(() => {
    document.body.style.backgroundColor = mood ? "#e0e0e0" : "#1e1e1e";
    document.body.style.color = mood ? "#1e1e1e" : "#e0e0e0";
  }, [mood]);

  return (
    <Layout mood = {mood} setMood = {setMood} >
      <Books mood = {mood} />
    </Layout>
  );
}

export default App;
