import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageElementActionCreator } from "../../redux/reducers/dialog-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageElementActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
