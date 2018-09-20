import React from 'react';

const sortArray = [
    { type: 'Name: A to Z', value: '?_sort=name:asc' },
    { type: 'Name: Z to A', value: '?_sort=name:desc' },
    { type: 'Price: Low to High', value: '?_sort=price:asc' },
    { type: 'Price: High to Low', value: '?_sort=price:desc' },
    { type: 'Stock: Low to High', value: '?_sort=stock:asc' },
    { type: 'Stock: High to Low', value: '?_sort=stock:desc' },
    { type: 'Hoodies', value: '?category=Hoodies' },
    { type: 'T-shirts', value: '?category=T-shirt' },
]

const sort = (props) => {
    const sortValues = sortArray.map((item, index) => {
        return (
            <option key={index} value={item.value}>
                {item.type}
            </option>
        );
    });

    return (
        <div className="products-header-sort">
            <select value={props.value} onChange={props.handleChange}>
                {sortValues}
            </select>
        </div>
    )
}

export default sort;
