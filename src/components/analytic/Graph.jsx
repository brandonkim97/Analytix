import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,  
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';


const Graph = ({ timeFrame }) => {
    const monthData = [
        { name: 'Jan', engagement: 4000, impression: 2400, amt: 2400 },
        { name: 'Feb', engagement: 3000, impression: 1398, amt: 2210 },
        { name: 'Mar', engagement: 2000, impression: 9800, amt: 2290 },
        { name: 'Apr', engagement: 2780, impression: 3908, amt: 2000 },
        { name: 'May', engagement: 1890, impression: 4800, amt: 2181 },
        { name: 'Jun', engagement: 2390, impression: 3800, amt: 2500 },
        { name: 'Jul', engagement: 3490, impression: 4300, amt: 2100 },
        { name: 'Aug', engagement: 3820, impression: 4030, amt: 2100 },
        { name: 'Sep', engagement: 2090, impression: 5650, amt: 2100 },
        { name: 'Oct', engagement: 3490, impression: 4300, amt: 2100 },
        { name: 'Nov', engagement: 4260, impression: 2650, amt: 2100 },
        { name: 'Dec', engagement: 3080, impression: 2060, amt: 2100 },
      ];
      const dayData = [
        { name: 'Monday', engagement: 4000, impression: 2400, amt: 2400 },
        { name: 'Tuesday', engagement: 3000, impression: 1398, amt: 2210 },
        { name: 'Wednesday', engagement: 2000, impression: 9800, amt: 2290 },
        { name: 'Thursday', engagement: 2780, impression: 3908, amt: 2000 },
        { name: 'Friday', engagement: 1890, impression: 4800, amt: 2181 },
        { name: 'Saturday', engagement: 2390, impression: 3800, amt: 2500 },
        { name: 'Sunday', engagement: 3490, impression: 4300, amt: 2100 },
      ];
      const yearData = [
        { name: '2014', engagement: 3000, impression: 1398, amt: 2210 },
        { name: '2015', engagement: 2000, impression: 9800, amt: 2290 },
        { name: '2016', engagement: 2780, impression: 3908, amt: 2000 },
        { name: '2017', engagement: 1890, impression: 4800, amt: 2181 },
        { name: '2018', engagement: 2390, impression: 3800, amt: 2500 },
        { name: '2019', engagement: 3490, impression: 4300, amt: 2100 },
        { name: '2020', engagement: 3820, impression: 4030, amt: 2100 },
        { name: '2021', engagement: 2090, impression: 5650, amt: 2100 },
        { name: '2022', engagement: 3490, impression: 4300, amt: 2100 },
        { name: '2023', engagement: 4260, impression: 2650, amt: 2100 },
        { name: '2024', engagement: 3080, impression: 2060, amt: 2100 },
      ];
      let data = "";
      switch(timeFrame) {
        case 'Day':
            data = dayData;
            break;
        case 'Month':
            data = monthData;
            break;
        case 'Year':
            data = yearData;
            break;
        default:
            break;
      }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="engagement" stroke="#0891b2" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="impression" stroke="#6366f1" />
            </LineChart>
        </ResponsiveContainer>
    )
}

Graph.propTypes = {
    timeFrame: PropTypes.string
}

export default Graph;