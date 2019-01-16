import React, { Component } from 'react';
import Menu from './Menu';
import Cart from './Cart';
import data from '../assets/data';
import { getSelectedItem, deleteSelectedItem } from '../helpers/menuHelper';
import { recalculate } from '../helpers/cartHelper';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.onClickCartItem = this.onClickCartItem.bind(this);

    this.state = {
      menu: null,
      selectedItems: [],
      subTotal: 0,
      taxes: 0,
      delivery: 0,
      total: 0,
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    this.setState({
      menu: data,
      loading: false
    });
  }

  onClickCartItem(e) {
    const selectedItems = deleteSelectedItem(this.state.selectedItems, e.target.id)
    const {
      subTotal,
      taxes,
      delivery,
      total,
    } = recalculate(selectedItems);
    this.setState({ selectedItems, subTotal, taxes, delivery, total })
  }

  onClickMenuItem(e) {
    const selectedItem = getSelectedItem(this.state.menu.menuSections, e.target.id);
    const selectedItems = [...this.state.selectedItems, ...selectedItem];
    const {
      subTotal,
      taxes,
      delivery,
      total,
    } = recalculate(selectedItems);
    this.setState({ selectedItems, subTotal, taxes, delivery, total });
  }

  render() {
    if (this.state.loading) {
      return (<div>Loading...</div>);
    }
    if (this.state.error) {
      return (<div>Error...</div>)
    }
    return (
      <div className="container">
        {
          this.state.selectedItems.length !== 0 ? (
            <Cart
              subTotal={this.state.subTotal}
              taxes={this.state.taxes}
              delivery={this.state.delivery}
              total={this.state.total}
              selectedItems={this.state.selectedItems}
              onClickCartItem={this.onClickCartItem}
            />
          ) : null
        }
        {
          this.state.menu ? (
            <Menu
              id={this.state.menu.id}
              title={this.state.menu.title}
              address={this.state.menu.address}
              imgUrl={this.state.menu.imgUrl}
              reviews={this.state.menu.reviews}
              menuSections={this.state.menu.menuSections}
              rating={this.state.menu.rating}
              onClickMenuItem={this.onClickMenuItem}
            />
          ) : null
        }
      </div>
    );
  }
}

export default App;
