import React, { useState } from 'react';

function TabbedList() {
  const [activeTab, setActiveTab] = useState('Fruits');

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div>
      <div className="tab">
        <button className={activeTab === 'Fruits' ? 'active' : ''} onClick={() => toggleTab('Fruits')}>Fruits</button>
        <button className={activeTab === 'Spices' ? 'active' : ''} onClick={() => toggleTab('Spices')}>Spices</button>
        <button className={activeTab === 'Vegetables' ? 'active' : ''} onClick={() => toggleTab('Vegetables')}>Vegetables</button>
      </div>

      <div id="fruits-list" className="tabcontent">
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Pear</li>
          <li>Watermelon</li>
          <li>Grape</li>
          <li>Strawberry</li>
          <li>Mango</li>
          <li>Blackberry</li>
        </ul>
      </div>

      <div id="spices-list" className="tabcontent">
        <ul>
          <li>Salt</li>
          <li>Pepper</li>
          <li>Chilli</li>
          <li>Herbs</li>
          <li>Curry</li>
        </ul>
      </div>

      <div id="vegetables-list" className="tabcontent">
        <ul>
          <li>Carrot</li>
          <li>Cucumber</li>
        </ul>
      </div>
    </div>
  );
}

export default TabbedList;
