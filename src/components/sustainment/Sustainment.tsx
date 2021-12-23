import React, { useState } from 'react';

import { PartDetails } from '../../model/commonModel';
import SustainmentFilter from '../sustainment-filter/SustainmentFilter';
import SustainmentContent from '../sustainment-content/SustainmentContent';

function Sustainment() {
    const [selectedPart, setselectedPart] = useState<PartDetails>({});
    const onPartSelected = (data: PartDetails) => {
        setselectedPart(data)
    }
    return (
        <div className="root">
            <SustainmentFilter onPartSelected={onPartSelected}/>
            <SustainmentContent selectedPart={selectedPart}/>
        </div>
    );
}

export default Sustainment;