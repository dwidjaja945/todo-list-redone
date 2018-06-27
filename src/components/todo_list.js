import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            itemName: ""
        };
        this.itemsArray = [];
        this.toggleCompleteItem = this.toggleCompleteItem.bind(this);
    };

    updateInput(event) {
        const { name , value } = event.target;

        this.setState({
            [name]: value
        });
    };

    addItem() {
        const newItem = this.state.itemName;

        this.itemsArray.push({itemName: newItem , complete: false});

        this.setState({
            items: this.itemsArray,
            itemName : ""
        });
    };

    toggleCompleteItem(item, itemIndex) {
        debugger;
        if( item.complete ) {
            this.itemsArray[itemIndex].complete = false;
            this.setState({
                items: this.itemsArray
            });
        } else {
            this.itemsArray[itemIndex].complete = true;
            this.setState({
                items: this.itemsArray
            });
        };
    };
    
    render() {
        const { items } = this.state;

        const itemList = items.map( (item , itemIndex) => {

            const { complete } = item;

            let completed = "";
            complete ? completed = "completed" : completed = "";
            debugger;

            return (
                <li key={itemIndex} className={completed} onClick={() => {this.toggleCompleteItem(item, itemIndex)}} >{item.itemName}</li>
            );
        });
        return (
            <div>
                <div className="addItem">
                    <input onChange={this.updateInput.bind(this)} type="text" value={this.state.itemName} name="itemName" />
                    <button onClick={this.addItem.bind(this)} > Add </button>
                </div>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }
}