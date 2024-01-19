import PropTypes from 'prop-types';
import React from 'react';

const ButtonTab = React.forwardRef(({ label, onClick }, ref) => {

  return (
    <>
        <button
            onClick={onClick}
            className={`text-lg transition-transform duration-300 pb-3`}
            ref={ref}
        >
        {label}
        </button>
    </>
  );
});

ButtonTab.displayName = 'ButtonTab';

ButtonTab.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonTab;
