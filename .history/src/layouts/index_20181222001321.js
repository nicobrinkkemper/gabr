import styles from './index.css';
import {useState} from 'react'
function BasicLayout(props) {
  let [drawerState,setDrawerState] = useState(false)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
