import React from "react";


const Test = (props) => {
    // console.log(props.loadPost);
    let newElement = React.createRef();

    let add = () => {
        let text = newElement.current.value;
        props.addD(text);
        newElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div>
            <textarea ref={newElement} onChange={onPostChange} value={props.newPostText} cols="100" rows="2">{props.loadPost}</textarea>
            <button onClick={add}>Send</button>
        </div>
    )
}

export default Test;