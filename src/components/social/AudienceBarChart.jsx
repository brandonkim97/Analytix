import { BarChart, Bar, Rectangle, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const AudienceBarChart = ({ data }) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Men" fill="#FF5733" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Women" fill="#4b89b8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
}

AudienceBarChart.propTypes = {
    data: PropTypes.array,
}


export default AudienceBarChart;