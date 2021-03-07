import { useState } from 'react';


const Clock = () => {

    let time = new Date().toLocaleTimeString();


    const [ctime, setCtime] = useState(time);
    
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
          setCtime(time)
    
    }

    setInterval(() => {
        return UpdateTime(1000);
      }, );


    return (
        <div className="App1"> 
    <div className="App">
           <h2> {ctime}</h2>
           <h2> {ctime}</h2>
           <h2> {ctime}</h2>
    </div>
    
    </div>
    )
}

export default Clock;