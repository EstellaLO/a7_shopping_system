import React, { useContext, useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext); //using context to receive the product list
    const [numToShow, setNumToShow] = useState(12); //Indicating how many product are showing currently
    const [filteredProducts, setFilteredProducts] = useState([]); //Indicating the Product list the are current showing to the user
    const [formVisble, setFormvisble] = useState(false); //Setting the visibility of the sort options 
    const [selectedSortOption, setSelectedSortOption] = useState("1");

    useEffect(() => { //This ensure rerendering when the web application switch page in different categories
        const updatedFilteredProducts = all_product.filter(
            (item) => props.category === item.category
        );
        let sortedProducts = [...updatedFilteredProducts];

        switch (selectedSortOption) {
            case "0":
                sortedProducts = [...updatedFilteredProducts];
                break;
            case "1": // highest to lowest rating
                sortedProducts.sort((a, b) => b.review - a.review);
                break;
            case "2": // lowest to highest rating
                sortedProducts.sort((a, b) => a.review - b.review);
                break;
            case "3": // highest to lowest price
                sortedProducts.sort((a, b) => b.new_price - a.new_price);
                break;
            case "4": // lowest to highest price
                sortedProducts.sort((a, b) => a.new_price - b.new_price);
                break;
            case "5": // alphabetical name order
                sortedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
                );
                break;
            case "6": // newest to oldest based on update_time
                sortedProducts.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
                break;
            default:
                break;
        }

        setFilteredProducts(sortedProducts);
        setNumToShow(Math.min(12, sortedProducts.length));
    }, [all_product, props.category, selectedSortOption]);

    const productsToShow = filteredProducts.slice(0, numToShow);

    const handleLoadMore = () => { //This handle when the user click Explore more button to show more product under this category
        setNumToShow(numToShow + 12);
    };

    const handleSortby = () => {
        setFormvisble(!formVisble);
        if (!formVisble) {
            setSelectedSortOption("1"); // Reset the selected sorting option
        } else { setSelectedSortOption("0"); }
    };

    const handleSortOptionChange = (event) => {
        setSelectedSortOption(event.target.value);
    };

    return (
        <div className='shop-category'>
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-{Math.min(numToShow, filteredProducts.length)}</span> out of {filteredProducts.length} products</p>

                <div className='shopcategory-sort' >
                    <div onClick={handleSortby} >Sort by </div>
                    {!formVisble && <img src={dropdown_icon} alt="" onClick={handleSortby} />}
                    {formVisble && <form action="">
                        <select value={selectedSortOption} onChange={handleSortOptionChange}>
                            <option value="1">highest to lowest rating</option>
                            <option value="2">lowest to hightest rating</option>
                            <option value="3">highest to lowest price</option>
                            <option value="4">lowest to highest price</option>
                            <option value="5">alphabetical name order</option>
                            <option value="6">newest to oldest</option>
                        </select>
                    </form>}
                </div>
            </div>
            <div className="shopcategory-products">
                {productsToShow.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} images={item.images} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            {numToShow < filteredProducts.length && (
                <div className='shopcategory-loadmore' onClick={handleLoadMore}>
                    Explore more
                </div>
            )}
        </div>
    )
}

export default ShopCategory