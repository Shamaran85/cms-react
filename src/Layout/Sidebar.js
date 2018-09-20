import React from 'react';

// import Author from '../Sidebar/Author';
import Newsletter from '../Sidebar/Newsletter';
import Categories from '../Sidebar/Categories';

const sidebar = () => {
    return (
        <div className="sidebar">
            <Categories />
            <Newsletter />
            {/* <Author /> */}
        </div>
    )
}

export default sidebar;
