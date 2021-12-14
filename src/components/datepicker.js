import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {format} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const PickDate= () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        withPortal
        portalId="root-portal"
      />
    );
  };
export default PickDate;