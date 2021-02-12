import React from 'react';

const RotationContext = React.createContext({
    updateUser: () => {},
    updateExchanges: () => {}
})

export default RotationContext;