import React from 'react';

const RotationContext = React.createContext({
    updateUser: () => {},
    updateExchanges: () => {},
    handleReturnPath: () => {},
    resetReturnPath: () => {}
})

export default RotationContext;