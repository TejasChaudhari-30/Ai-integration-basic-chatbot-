import { useState } from "react";
import "./App.css";
import MsgCard from "./components/msgcard.jsx";


function App() {
  const [que, setq] = useState("");
  // const [answer, seta] = useState("");
  // const [dis,setdisplay]=useState("");
const [loading,setload]=useState(false);
const [message,setMessages]=useState([]);

  async function HandleClick(e) {
    e.preventDefault(); 

    //  setdisplay(que);
   const userMsg = {
    role: "user",
    parts: [{ text: que }]
  };

  const updatedMessages = [...message, userMsg]; //because message array is still old here it will updated at the end

  setMessages(updatedMessages); 
  setq("");

setload(true); 
    const res = await fetch("http://localhost:3000/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        history: updatedMessages,
      }),
    });

 

    const data = await res.json();
    console.log(data);
        
    setload(false);


    setMessages(prev => [
  ...prev,
 data
]);//adding bot reply  to msg history
        

  }

  return (
    <div>
      <h1>Hello</h1>

      <div className="input-box">
  <textarea
    value={que}
    onChange={(e) => setq(e.target.value)}
    placeholder="Ask something..."
    onKeyDown={(e) => {
    if (e.key === "Enter") {
      console.log("Enter on button");
      HandleClick(e)
    }
  }}
  />
  <button  onClick={HandleClick}>Send</button>
</div>
    <div className="chat-container">
  {message.map((msg, index) => (
    <MsgCard
      key={index}
      text={msg.parts[0].text}
      type={msg.role}
    />
  ))}

  {loading && (
    <MsgCard type="model" loading={true} />
  )}
</div>
      
     
    </div>
  );
}

export default App;