import styles from './style.module.css'

export default function input(props){
   const {placeholder, value , onChange,type,name,required } = props
    return(
        <input placeholder={ placeholder} 
            value={value}
            onChange={onChange}
            type = {type}
            name = {name}
            className={styles.input}
            // required = {required}
        />
    )
}
