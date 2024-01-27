// import { useState } from "react"
// import  {RxCross1} from "react-icons/rx"
// import {axios} from "axios"
// import { baseURL } from "../utils/constant"


// const Popup = ({setShowPopup, popupContent,setUpdateUI }) => {
// const[input,setInput] = useState(popupContent.text);

// const updateToDo = () => {
//     axios
//       .put(`${baseURL}/update/${popupContent.id}`, { toDos: input })
//       .then((res) => {
//         console.log(res.data);
//         setUpdateUI((prevState) => !prevState);
//         setShowPopup(false);
//       });
//   };

//   return (
//     <div className='backdrop'> 
//       <div className="popup">
//         <RxCross1 className="cross" onClick={()=> setShowPopup(false)}/>
//         <h1>update todo</h1>

//         <div className="pop__input_holder">
//         <input 
//     value={input}
//      onChange={(e)=>setInput(e.target.value)} 
//      type="text" placeholder="update a task" />
//     <button onClick={updateToDo}>Update</button>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Popup

import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";
import { useState } from "react";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;