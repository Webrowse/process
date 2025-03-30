// SelectOption.jsx
import React from 'react';

const SelectOption = ({ value, children }) => {
  return (
    <option value={value}>{children}</option>
  );
};

export default SelectOption;
