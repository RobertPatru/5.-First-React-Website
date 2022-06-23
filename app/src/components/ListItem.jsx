function ListItem( {item} ) {
    return (
        <li className="list-item color-gray hover"> {item} </li>
    )
}

ListItem.defaultProps = {
    item: 'placeholder list item'
}

export default ListItem;