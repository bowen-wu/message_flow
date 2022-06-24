import React from 'react';
import { chatHistory } from './db/db';
import { MessageType } from './db/type';
import 'antd/dist/antd.css';
import './App.scss';
import { Image, render, System, Text } from './components/polymorphic';

const MessageMap = {
  [MessageType.SYSTEM]: System,
  [MessageType.TEXT]: Text,
  [MessageType.IMAGE]: Image
};

const App = (): JSX.Element => {
  return (
    <div className="App">
      {chatHistory.map((message, index) =>
        render(MessageMap[message.type], {
          message,
          lastMessageTime: index === 0 ? 0 : chatHistory[index - 1].time
        })
      )}
    </div>
  );
};

export default App;
