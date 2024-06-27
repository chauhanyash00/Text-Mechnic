import  React , {useState} from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';
import Alert from './Componets/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, mybtn] = useState ("Enable Dark Mode");
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      mybtn("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable" , "success")
      setTimeout(() => {
        document.title = 'SIT - Admission'
      }, 200);
      setTimeout(() => {
        document.title = 'SIT - ADMISSION'
      }, 150);
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      mybtn("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable" , "success")
      document.title = 'SIT - Light Mode'

    }
  }

  return (
    <>  
    <Navbar title="Chauhan" aboutText="Contact Us" mode={mode}  toggleMode = {toggleMode} btnText={btnText}></Navbar>
    <Alert alert={alert}/>
    <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></TextForm>
    </>
  );
}

export default App;  
