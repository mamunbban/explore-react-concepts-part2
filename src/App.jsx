import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
 function handleClick(){
  alert('button click')
 }
 const handleClick2 = ()=>{
  alert('click okay')
 }
 const addToFive = (num)=>{
  alert(num + 5)
 }

  return (
    <>

      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter> </Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click</button>
      <button onClick={()=>{alert('third click')}}>third</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
