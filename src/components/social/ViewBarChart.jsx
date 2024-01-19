import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CustomBar = ({ x, y, width, height, index, fill, onMouseEnter, onMouseLeave }) => (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={index === fill ? '#4b89b8' : '#FF5733'}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
    />
  );

const ViewBarChart = ({ data }) => {
    const [hoveredBar, setHoveredBar] = useState(null);

    return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={22}>
            <Bar 
                dataKey="value" 
                shape={(props) => (
                    <CustomBar
                        {...props}
                        index={props.index}
                        fill={hoveredBar}
                        onMouseEnter={(index) => setHoveredBar(index)}
                        onMouseLeave={() => setHoveredBar(null)}
                    />
                )}
            />
            <YAxis domain={[0, 4500]}  />
            <XAxis dataKey="name" />
          </BarChart>
        </ResponsiveContainer>
      )
}

ViewBarChart.propTypes = {
    data: PropTypes.array
}

CustomBar.propTypes = {
    x: PropTypes.any,
    y: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.number,
    index: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
}

export default ViewBarChart;