import React from "react";
import styles from "./Paginator.module.css";
import uuid from "uuid";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.pagesNavigation}>
            {pages.map(page => {
                const classes = [];
                classes.push(styles.pageNumber);
                if (page === currentPage) {
                    classes.push(styles.selectedPage);
                }
                return (
                    <span
                        key={uuid.v4()}
                        className={classes.join(" ")}
                        onClick={event => {
                            onPageChanged(page);
                        }}
                    >
              {page}
            </span>
                );
            })}
        </div>
    );
};

export default Paginator;
