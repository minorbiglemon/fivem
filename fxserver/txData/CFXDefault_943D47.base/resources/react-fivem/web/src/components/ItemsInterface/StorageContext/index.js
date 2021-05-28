import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const StorageContext = createContext({
  quantity: 0,
  setQuantity: () => {}
});

const StorageProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  return <StorageContext.Provider value={[quantity, setQuantity]}>{children}</StorageContext.Provider>;
};

const useStorage = (initialValue) => {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  const { quantity, setQuantity } = useContext(StorageContext);
  if (initialValue) {
    console.log('initialValue', initialValue);
    setQuantity(initialValue);
  }
  return [quantity, setQuantity];
};

export {
  StorageProvider,
  useStorage
};

StorageProvider.propTypes = {
  children: PropTypes.node.isRequired
};
