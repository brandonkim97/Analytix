import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


const RevenueBarChart = ({ data }) => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={15} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
          <Legend iconSize={10} layout="horizontal"  />
        </RadialBarChart>
      </ResponsiveContainer>
    );
}

RevenueBarChart.propTypes = {
    data: PropTypes.array
}

export default RevenueBarChart;
