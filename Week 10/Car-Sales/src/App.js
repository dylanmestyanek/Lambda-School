import React from 'react';
import { connect } from "react-redux"

import { removeItem, addItem } from "./actions"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ 
  additionalPrice, 
  car, 
  additionalFeatures, 
  removeItem,
  addItem
}) => {
  const removeFeature = item => {
    removeItem(item)
  };

  const buyItem = item => {
    addItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps, 
  { 
    removeItem, 
    addItem 
  }
  )(App);
