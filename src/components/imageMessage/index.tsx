import React, { useState } from 'react';
import { MessagePropsBase } from '../interface';
import scopedClasses from '../../utils/scopedClasses';
import { mySelf } from '../../db/db';
import UserMessage from '../userMessage';
import { Modal } from 'antd';
import './index.scss';

const sc = scopedClasses('image-message');

const ImageMessage = (props: MessagePropsBase) => {
  const { message } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={sc()} key={message.id}>
      <UserMessage
        {...props}
        messageWidget={
          <div
            data-testid="imageMessage-img"
            className={sc({ image: true, isSelf: message.user?.id === mySelf.id })}
            onClick={() => setIsModalVisible(() => true)}
          >
            <img src={message.content} alt="" />
          </div>
        }
      />

      {/* TODO: 此 Modal 可以放置在最外层，点击后，将 messageHistory filter 进去，之后在将点击的 message 传入进去，可以做个 Carousel */}
      <Modal
        title=""
        footer={null}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        destroyOnClose
      >
        <div className={sc('model')}>
          <img data-testid="imageMessage-model-image" src={message.content} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageMessage;
