import { useEffect, useState } from 'react';
import styles from '../../../styles/module.css/allPages/app_pages.module.css';
import componentStyles from '../../../styles/module.css/components.module.css';
import Layout from './Layout';
import Nav from './nav';
import ItemsContainer from './items';
import TheItemContainer from './theItem';

const Home = ({ appData , userId}) => {
    const allItems = appData?.items
    const theCategories = appData?.categories
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedCategory,setCategory] = useState(theCategories[0].name)
    const [categoryItems, setcategoryItems] = useState(allItems.filter(item=> item.category === selectedCategory) || []);
    useEffect(() => {
        const the_items = allItems.filter(item=> item.category === selectedCategory) || []
        setcategoryItems(the_items)
    }, [selectedCategory]);
    console.log('selectedCategory: ', selectedCategory)
    console.log('allItems: ', allItems)
    const reduceItems = categoryItems.slice(0,3)
    return (
        <Layout userId={userId} main_page = 'true' page_name = 'Categories'>
            {
                !selectedItem &&(
                    <Nav navData={theCategories} selectedCategory={selectedCategory} setCategory={setCategory}
                    setSelectedItem={setSelectedItem}
                    />
                )
            }
            <div className={`${styles.page} ${styles.index}`}>
                {
                    categoryItems && categoryItems.length > 0?(
                        selectedItem?(
                            <>
                                <TheItemContainer selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                                <p>Similar items</p>
                                <ItemsContainer theItemsData={reduceItems} setSelectedItem={setSelectedItem}
                                    selectedItem={selectedItem}
                                />
                            </>
                        ):(
                            <>
                                <ItemsContainer theItemsData={categoryItems} setSelectedItem={setSelectedItem}
                                    selectedItem={selectedItem}
                                />
                                <div className={componentStyles.pageNav}>
                                    <article>
                                        Previous
                                    </article>
                                    <aside>
                                        Next
                                    </aside>
                                </div>
                            </>
                        )
                    ):(
                        <p>No available items</p>
                    )
                }
            </div>
        </Layout>
    );
};

export default Home;
