import React from 'react';
import '../../App.css';

const ResetSettingsButton = ({ 
    handleReset
}) => (

     <button 
        className="btn btn-primary reset-settings-button"
        onClick={handleReset}
      >
      Reset Settings</button>
      
)

export default ResetSettingsButton;