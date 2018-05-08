import React from 'react';
import {Button} from 'antd';
import styles from './index.less';
const <%= oni.componentName %> = ({list,handleClick}) => {
  return (
    <div>
      <%= oni.componentName %>  work
      <Button type="danger" onClick={handleClick} ><%= oni.componentName %></Button>
      { JSON.stringify(list)}
    </div>
  );
};

export default <%= oni.componentName %>;
