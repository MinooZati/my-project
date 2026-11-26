import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App ,
 { message } from './App';



const el = document.getElementById('root')
const root = createRoot(el)

// let num = Math.random() ;
// export function App() {


//     // const name = "kosar zati ";
//     const typeValue ="number";
    

//     return (
        
//         <>
//         <input
//           type={typeValue}
//           list={[1,2,3]}
//           style={{color:"red"}}
//           min={5}
        
//         />

// {/*         
//          <h1>my first project</h1>
//          <h1>{new Date().toLocaleTimeString()}</h1>
//          <h1>{name}</h1>
//          <h1>{num}</h1>
//        */}
//         </> 
//         );


// }

root.render(<StrictMode>
        <App/>
        {message}
    </StrictMode>)
    
