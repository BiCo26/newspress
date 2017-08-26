import React, {Component} from 'react';

const Topic = (props) => {
  return (
    <div className="topic">
      <p>{props.username}: {props.topic}</p>
    </div>
  )
}

export default Topic;