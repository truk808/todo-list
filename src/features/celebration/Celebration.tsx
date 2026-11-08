import styles from './Celebration.module.css'

export const Celebration = () => {
    return (
        <div className={`${styles.emptyState} ${styles.visible}`}>
            <h3 className={styles.emptyTitle}>Все дела выполнены!</h3>
            <p className={styles.emptyText}>
                Время отдохнуть, перезагрузиться или поставить перед собой новую увлекательную цель.
            </p>
        </div>
    );
};
