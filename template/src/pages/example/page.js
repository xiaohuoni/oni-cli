import { connect } from 'dva';
import styles from './page.less';
import {Button} from 'antd';
import Example from './components/Example';

function App(props) {
  const exampleData = {
    list:props.pageData.list,
    handleClick:() => {
      props.dispatch({
        type: 'example/delete',//FIXME: 这里要修改对应的namespace
        payload: {
        },
      })
    }
  }
  return (
    <div className={styles.normal}>
      <h2>
        {props.pageData.text}
      </h2>
      <Example {...exampleData}/>
      <Button  type="primary" onClick={() => {
          props.dispatch({
            type: 'example/update',//FIXME: 这里要修改对应的namespace
          });
        }}>点击</Button>
    </div>
  );
}

export default connect(state => {
  return {
    //FIXME: 这里要修改对应的namespace
    pageData: state.example
  };
})(App);
