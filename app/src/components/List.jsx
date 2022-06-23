import ListItem from "./ListItem";

function List() {
    return (
        <ul className="add-flex add-JC-space-between list">
            <ListItem item={'header link one'} />
            <ListItem item={'header link two'} />
            <ListItem item={'header link three'} />
        </ul>
    );
}

export default List;