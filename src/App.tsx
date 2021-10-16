import React from 'react';
import { chatHistory } from './db/db';
import { MessageType } from './db/type';
import SystemMessage from './components/systemMessage';
import TextMessage from './components/textMessage';
import ImageMessage from './components/imageMessage';
import './App.scss';

const MessageMap = {
  [MessageType.SYSTEM]: SystemMessage,
  [MessageType.TEXT]: TextMessage,
  [MessageType.IMAGE]: ImageMessage
};

const App = () => {
  return (
    <div className="App">
      {chatHistory.map((message, index) =>
        MessageMap[message.type]({
          message,
          lastMessageTime: index === 0 ? 0 : chatHistory[index - 1].time
        })
      )}
    </div>
  );
};

export default App;
