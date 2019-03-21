import React from 'react';

const ResetSettingsButton = ({ 
    handleReset
}) => (

     <button 
        className="btn btn-primary"
        onClick={handleReset}
      >
      Reset Settings</button>
      
)

export default ResetSettingsButton;