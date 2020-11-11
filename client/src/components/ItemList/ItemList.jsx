import React from 'react'
import Item from '../Item'
import './ItemList.scss';

export const ItemList = ({itemList, selectItem}) => (
    <div className="itemlist">
        {itemList.map(item => {
            return <Item key={item.id} item={item} selectItem={selectItem} />;
        })}
    </div>
)
