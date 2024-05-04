import styles from './converter.module.css'
const Converter = () => {
    return (
        <div className={styles.tableHeader}>
            <div className={styles.tableSeatNum}>1</div>
            <div className={styles.tableDisplayName}>2</div>
            <div className={styles.tableEmail}>3</div>
            <div className={styles.tableGroup}>
                4<span className={styles.star}>*</span>
            </div>
            <div className={styles.tableErrorHint}>5</div>
        </div>
    )
}

export default Converter
