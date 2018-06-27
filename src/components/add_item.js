import React from 'react';

export default class AddItem extends React.Component {
    constructor() {
        this.state = {
            itemName : ""
        };
    }
    updateInput() {

    }
    render() {
        return(
            <div>
                <input type="text" value={itemName} name="itemName" />
                <button>Add</button>
            </div>
        );
    }
}