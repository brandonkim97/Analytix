import { sliceEvents, createPlugin } from '@fullcalendar/core';
import PropTypes from 'prop-types';

const CustomView = (props) => {
  const segs = sliceEvents(props, true); // allDay=true

  return (
    <>
      <div className='view-title'>
        {props.dateProfile.currentRange.start.toUTCString()}
      </div>
      <div className='view-events'>
        {segs.length} events
      </div>
    </>
  );
};

CustomView.propTypes = {
    props: PropTypes.any,
}

const CustomViewPlugin = createPlugin({
    views: {
      custom: CustomView
    }
});
  
export default CustomViewPlugin;