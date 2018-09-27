import React from "react";
import BreadcrumbMenu from "../../partials/BreadcrumbMenu";
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const CollectionList = ( props ) => {
    
    return (
        <div>
            {/* <BreadcrumbMenu /> */}
            <ul className="list-group">
            {props.children}
            </ul>
        
            {/* <ShareBtn>
            <EditMenu>
            <ReorderMenu> */}
        </div>
        
    );
};

export default CollectionList;

// Reordering code --implementation to come

// const CollectionListItem = SortableElement(({value}) =>
//   <li>{value}</li>
// );

// const CollectionList = SortableContainer(({items}) => {
//   return (
//     <ul>
//       {items.map((value, index) => (
//         <CollectionListItem key={`item-${index}`} index={index} value={value} />
//       ))}
//     </ul>
//   );
// });

// class SortableComponent extends Component {
//   state = {
//     items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
//   };
//   onSortEnd = ({oldIndex, newIndex}) => {
//     this.setState({
//       items: arrayMove(this.state.items, oldIndex, newIndex),
//     });
//   };
//   render() {
//     return (
//     <CollectionList items={this.state.items} onSortEnd={this.onSortEnd} />)
//     ;
//   }
// }

// export default CollectionList;

