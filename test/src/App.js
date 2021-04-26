
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/profile' 

function App() {
  const handleName = name => alert(name);

  return (
    <div className="App">
    <Profile fullName='nada' bio='ma biographie' profession='etudiante' handleName= {handleName} color='red'  >  
    <img src="/photo.jpg" alt="photoo"/>
    </Profile>  
    </div>
  );
}

export default App;
