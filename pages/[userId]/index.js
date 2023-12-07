// Index.js
import styles from '../../styles/module.css/allPages/Dashboard.module.css';
import React from 'react';
import Row1 from './dashboard/row1';
import Row2 from './dashboard/row2';
import FacilityLayout from './Layout';
import {waste} from '../../assets/images/waste.jpg';
const Index = ({appData}) => {
    const row1Data = appData?.categories 
    const row2Data = appData?.items 
    console.log('this is dashboard')
    return (
        <FacilityLayout page_name='Dashboard'>
            <div id={styles.Dashboard}>
                <div id={styles.pageHead}>
                    <img src={waste} width='200px' height='300px'/>
                    <div className={styles.textHolder}>
                        E-WASTE MANAGEMENT RE-IMAGINED
                    </div>
                </div>
                <div id={styles.content}>
                    <div className={styles.a_row}>
                        <h2>Categories</h2>
                        <Row1 row1Data={row1Data}/>
                    </div>
                    <div className={styles.a_row}>
                        <h2>Mew items</h2>
                        <Row2 row2Data ={row2Data}/>
                    </div>
                </div>
            </div>
        </FacilityLayout>
    );
};

export default Index;
