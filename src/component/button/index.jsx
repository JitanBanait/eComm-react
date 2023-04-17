import styles from './style.module.css';
export default function Button(props){
const{onClick ,children } = props;
return(
    <button onClick = {onClick}
    className={styles.input}>{children}
    </button>
)

}