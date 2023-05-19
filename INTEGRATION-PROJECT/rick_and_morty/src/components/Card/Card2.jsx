import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card2(props) {

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.ring}>
                    <img className={styles.card} src={props.image} alt="" />
                    <div className={styles.border}>
                        {/* <p className={styles.title}>{props.name}</p> */}
                        <div className={styles.slide}>
                            <h6 className={styles.para}>{props.name}</h6>
                            <div className={styles.line}>
                                <h6 className={styles.para}>OUT</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                                <button  onClick={() => props.onClose(props.id)} className={styles.para}>x</button>
                            </div>
                            <div className={styles.line}>
                                <h6 className={styles.para}>RTN</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                                <h6 className={styles.para}>£659</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}