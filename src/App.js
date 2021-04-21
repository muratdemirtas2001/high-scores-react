import './App.css';
import scores from "./scores"
import HighScoreCard from "./HighScoreCard"

function App() {
  return(
    <>
    <HighScoreCard scores={scores}/>
    </>

  )
}

export default App;
