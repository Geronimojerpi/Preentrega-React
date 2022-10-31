import Item from './Item'

const List = ({items = []})=>{
    
    return (
        <div className='contenedoritems'>
        {items.map(item => <Item key={item.id} {...item}/>)}
        </div>
        )

}

export default List