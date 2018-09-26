import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import onClickOutside from "react-onclickoutside";
import "./dropdown.css";


class Dropdown extends Component {

  state = {
    listOpen: false,
    headerTitle: this.props.title
  }

  handleClickOutside = () => {
    this.setState ({
      listOpen: false
    });
  }

  toggleList = () => {
    this.setState (prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  static getDerivedStateFromProps = (nextProps) => {
    const count = nextProps.list.filter(function(a) { return a.selected; }).length;
    if (count === 0) {
      return { headerTitle: nextProps.title};
    } 
    else if (count === 1) {
      return { headerTitle: `${count} ${nextProps.titleHelper}`};
    }
    else if (count > 1) {
      return { headerTitle: `${count} ${nextProps.titleHelper}s`};
    }
  }

  render() {
    const {list, toggleItem} = this.props;
    const {listOpen, headerTitle} = this.state;

    return (
      <div className="dd-wrapper">

        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />
          }
        </div>

        {listOpen && <ul className="dd-list">
          {list.map((item, index) => (
            <li className="dd-list-item" key={index} onClick={() => toggleItem(index, item.key)}>
              {item.title} {item.selected && <FontAwesome name="check" />}
            </li>
          ))}
        </ul>}

      </div>
    )
  }

}

export default onClickOutside(Dropdown);
