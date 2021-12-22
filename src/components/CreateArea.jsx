import React, { useState } from "react";

function CreateArea(props) {

const[inclusion , setinclusion] = useState({
 title: "",
 content: ""
})

 function printcontent(event){
  const { value, name } = event.target;
  setinclusion((previousValue) => {
    return {
      ...previousValue,
      [name]: value
    };
  })
 }

 function passNote(event){
      props.addfunction(inclusion);
      event.preventDefault();
      setinclusion({
        title:"",
        content:""
      })
 }

  return (
    <div>
      <form>
        <input onChange={printcontent} name="title" placeholder="Title" value={inclusion.title}  />
        <textarea onChange={printcontent} name="content" placeholder="Take a note..." rows="3" value={inclusion.content} />
        <button onClick={passNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
