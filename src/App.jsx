 
import './App.css'   
import Counter from './Counter'
import User from './User'
import Friends from './friends'


function App() { 
  const handleClick = () =>{
    alert('Button Clicked')
  } 
  function handleClick3 (){
    alert('this is button-3')
  }
  return (
    <> 
      <h1>Vite + React</h1>   
      <Friends></Friends>
      <User></User> 
      <Counter></Counter>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => {alert('this is a Buttton')}} >Click-2</button>
      <button onClick={handleClick3}>Button Click</button>
 
    </>
  )
}
 

export default App
