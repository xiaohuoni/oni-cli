
import { connect } from 'dva';
import styles from './index.less';

function App({<%= oni.fileName %>,dispatch}) {
    const { text,list } = <%= oni.fileName %>;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}

export default connect(({<%= oni.fileName %>})=>({<%= oni.fileName %>}))(App);
