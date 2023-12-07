// Row1.js
import styles from '../../../styles/module.css/allPages/Dash_Content.module.css';
import React from 'react';

const Row1 = ({row1Data}) => {
    const the_items = row1Data
    const returnCard = (key, dict) =>{
        return(
            <div className={styles.card}>
                <div className={styles.top}>
                    <img src={dict.image}/>
                </div>
                <div className={styles.bottom}>
                    <p>{dict.name}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.row1}>
            {
                Object.keys(the_items).map(key=>(
                    returnCard(key, the_items[key])
                ))
            }
        </div>
    );
};

export default Row1;
