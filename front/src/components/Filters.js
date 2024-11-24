import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import PriceRange from "./PriceRange";
import '../assets/css/STYLES.css';

function Filters(props) {

    const {data, categories, colors} = props;
    console.log(colors);


    const location = useLocation();
    const navigate = useNavigate();
    const [expandedCategories, setExpandedCategories] = useState({});
    const [checkedCategories, setCheckedCategories] = useState({});


    const handleChange = (categoryId) => {
        const queryParams = queryString.parse(location.search);

        const isChecked = checkedCategories[categoryId] || false;

        if (isChecked) {
            delete queryParams.category;
            setCheckedCategories(prev => ({ ...prev, [categoryId]: false }));
        } else {
            queryParams.category = categoryId;
            setCheckedCategories(prev => ({ ...prev, [categoryId]: true }));
        }

        const queryObject = queryString.stringify(queryParams);
        navigate(`/shop?${queryObject}`);
        console.log(queryObject);
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };

    const renderItems = (parentId) => {
        const queryObject = queryString.parse(location.search);

        return categories.filter(item => item.parentId === parentId).map((item) => (
            <li key={item._id}
                className={`sub-menu ${expandedCategories[item._id] ? 'show' : ''}`}
                style={{ padding: '10px', fontSize: '12px', margin: '10px', fontFamily: 'sans-serif'}}
                data-toggle='collapse'
                data-target='#woman2'
            >
                <label className='item'>
                    <input type='checkbox'
                           checked={queryObject.category === item._id}
                           onChange={() => handleChange(item._id)}
                           onClick={() => toggleCategory(item._id)}
                           style={{cursor: 'pointer'}}
                    />

                    <span className={'collapsed'} style={{cursor: 'pointer'}}>
                        {`\t${item.title}`}
                    </span>
                </label>


                {(expandedCategories[item._id] || queryObject.category === item._id || getChildren(item._id).includes(queryObject.category)) && (
                    <ul id={`sub-menu-${item._id}`}
                        className={`sub-menu ${expandedCategories[item._id] ? 'show' : ''}`}
                        style={{transition: '0.4s'}}
                    >
                        {renderItems(item._id)}
                    </ul>
                )}
            </li>
        ));
    }

    const getChildren = (parentId) => {
        const list = [];
        function getId(productId) {
            categories.forEach(item => {
                if (item.parentId === productId) {
                    list.push(item._id);
                    getId(item._id);
                }
            });
        }
        getId(parentId);
        return list;
    };

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="shop_sidebar_area">
                <div className="widget catagory mb-50">
                    <div className="nav-side-menu">
                        <h6 className="mb-0">Categories</h6>
                        <div className="menu-list">
                            <ul id="menu-content2" className="menu-content collapse out">
                                {renderItems(null)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="widget price mb-50">
                    <h6 className="widget-title mb-30">Filter by Price</h6>
                    <div className="widget-desc">
                        <div className="slider-range">
                            <PriceRange />
                        </div>
                    </div>
                </div>
                <div className="widget color mb-70">
                    <h6 className="widget-title mb-30">Filter by Color</h6>
                    <div className="widget-desc">
                        <ul className="d-flex justify-content-between">

                            {
                                colors?.map(item => (
                                    item.colors.map((item, index) => (
                                        <li key={index} className={item.color}><Link to="#"><span>({item.count})</span></Link>
                                        </li>
                                    ))
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="widget size mb-50">
                    <h6 className="widget-title mb-30">Filter by Size</h6>
                    <div className="widget-desc">
                        <ul className="d-flex justify-content-between">

                            {
                                colors?.map(item => (
                                    item.sizes.map((item, index) => (
                                        <li key={index}><Link to="#">{item}</Link></li>
                                    ))
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="widget recommended">
                    <h6 className="widget-title mb-30">Recommended</h6>
                    <div className="widget-desc">

                        {data?.map((item, index) => (
                            item.recommended && (
                                <div key={index} className="single-recommended-product d-flex mb-30">
                                    <div className="single-recommended-thumb mr-3">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="single-recommended-desc">
                                        <h6>{item.name}</h6>
                                        <p>$ {item.price}</p>
                                    </div>
                                </div>
                            )
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;

