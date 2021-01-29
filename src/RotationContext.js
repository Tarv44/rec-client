import React from 'react';

const RotationContext = React.createContext({
    updateUser: () => {},
    addExchange: () => {}
})

export default RotationContext;