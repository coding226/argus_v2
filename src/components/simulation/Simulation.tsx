import React, { useState } from 'react';
import './Simulation.css';

import Filter from '../filter/Filter';
import SearchContent from '../simulation-content/SearchContent';
import { PartDetails } from '../../model/commonModel'


function Simulation() {
  const [selectedPart, setselectedPart] = useState<PartDetails>({});
  const onPartSelected = (data: PartDetails) => {  
      setselectedPart(data)
  }
  return (
    <div className="root">
      <Filter onPartSelected={onPartSelected}/>
      <SearchContent selectedPart={selectedPart}/>
    </div>
  );
}

export default Simulation;