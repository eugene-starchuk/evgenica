import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  // debugger
  let dialogElements = props.dialogPage.dialogs.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} img={d.img} />
  ));

  let messageElements = props.dialogPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let addMessage = () => {
    props.addMessage()
  };
  let onMessageChange = (e) => {
    // debugger
    let text = e.target.value;
    props.onMessageChange(text)
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea
            // onKeyDown={addMessage}
            onChange={onMessageChange}
            value={props.dialogPage.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
