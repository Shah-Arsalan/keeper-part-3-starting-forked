import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[noteadded , setnoteadded] = useState([])

function addnote(inclusion){
setnoteadded(prev=>{
  return([...prev,inclusion])
})

}

function deleteNote(id){
setnoteadded((prevValue) =>{
  return prevValue.filter((currentitem,index) =>{
    return index !== id;
  })
})
}

  return (
    <div>
      <Header />
      <CreateArea
         addfunction={addnote}
       />
{/* 
{noteadded.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            
          />
        );
      })}
       */}




{noteadded.map((noteItem,index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
            
          />
        );
      })}


      <Footer/>
    </div>
  );
}

export default App;



