import Navbar from "../src/components/Navbar";
import Pomodoro from "./components/Pomodoro";

function App() {

  return (

    <>

      <div id="noise" className="fixed w-screen h-screen pointer-events-none opacity-80 bg-noise-pattern" />

      <div className="flex flex-row justify-center w-screen min-h-screen max-h-fit bg-lofi-gradient">

        <Navbar/>

        <div className="justify-center h-screen mt-64 items-centereen items all">
        
          <Pomodoro/>

          
        </div>


      </div>

    </>

      

  );
};

export default App;
