import styles from "./FilterTask.module.css";
import {useCustomContext} from "../../../../context/useCustomContext.tsx";
import {FILTER} from "../../const/filter.const.ts";

export const FilterTask = () => {
    const {todo} = useCustomContext()

    return (
        <div className={styles.filterRow}>
            <div className={styles.filterTabs}>
                {
                    FILTER.map((option) => (
                        <button
                            onClick={() => {todo.setFilter(option)}}
                            type="button"
                            className={`
                                ${styles.filterTab} 
                                ${todo.filter.label === option.label && styles.active}
                            `}>
                            {`${option.label}`}
                        </button>
                    ))
                }
            </div>
        </div>
    // <div className={styles.filterRow}>
    //         <div className={styles.filterTabs}>
    //             <button type="button" className={`${styles.filterTab} ${styles.active}`}>
    //                 Все (0)
    //             </button>
    //             <button type="button" className={styles.filterTab}>
    //                 В работе (0)
    //             </button>
    //             <button type="button" className={styles.filterTab}>
    //                 Готово (0)
    //             </button>
    //         </div>
    //     </div>
    );
};

