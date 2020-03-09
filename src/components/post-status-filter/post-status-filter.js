import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' }
    ];
  }
  
  render() {

    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const color = active ? 'info' : 'secondary';
      const outline = active ? false : true ;
      return (
        <Button
          key={name}
          outline={outline}
          color={color}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </Button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}