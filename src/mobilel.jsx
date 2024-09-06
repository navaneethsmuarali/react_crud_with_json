import React, { useState, useEffect } from 'react';
import productsData from './products_db.json';

function MobileList() {
    const [data, setData] = useState([]);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        setData(productsData.products);
    }, []);

    const handleAdd = (item) => {
        
        setAddedItems([item, ...addedItems]);
    
      
    };

    const handleDelete = (id) => {
        
        setAddedItems(addedItems.filter(item => item.id !== id));
        const itemToRestore = addedItems.find(item => item.id === id);
        if (itemToRestore && !data.some(existingItem => existingItem.id === itemToRestore.id)) {
            setData([itemToRestore, ...data]);
        }
    };
    

    return (
        <div className='cont_1'>
            <h2>Added Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount Percentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {(
                        addedItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercentage}</td>
                                <td>{item.rating}</td>
                                <td>{item.stock}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className='button_delete' onClick={() => handleDelete(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <h2>All Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount Percentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    { (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercentage}</td>
                                <td>{item.rating}</td>
                                <td>{item.stock}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className='button_add' onClick={() => handleAdd(item)}>Add</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default MobileList;
