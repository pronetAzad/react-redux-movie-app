import React from 'react';

const InlineError = ({ message }) => {
    return (
      <div style={{ color: '#f35353' }}>
        { message }
      </div>
    )
}

export default InlineError;

