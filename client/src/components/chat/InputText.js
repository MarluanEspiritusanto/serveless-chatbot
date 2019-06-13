import React, { Component } from "react";

export default class InputBox extends Component {
   constructor(props) {
      super(props);
      this.input = React.createRef();
      this.sendMessage = this.sendMessage.bind(this);
      this.checkEnterPressed = this.checkEnterPressed.bind(this);
   }

   sendMessage() {
      if (this.input && this.input.current && this.input.current.value && this.props.sendMessage) {
         this.props.sendMessage(this.input.current.value);
      }
      this.input.current.value = null;
   }

   checkEnterPressed(e) {
      if (e.keyCode === 13 && e.shiftKey === false) {
         this.sendMessage();
      }
   }

   render() {
      return (
         <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
               <input
                  className="message_input"
                  ref={this.input}
                  type="text"
                  onChange={this.changeTextState}
                  onKeyDown={this.checkEnterPressed}
                  placeholder="Introducir texto"
               />
            </div>
            <div className="send_message">
               <div className="icon" />
               <div className="text" onClick={this.sendMessage}>
                  Send
               </div>
            </div>
         </div>
      );
   }
}
