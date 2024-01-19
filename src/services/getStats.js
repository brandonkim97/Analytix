
const getStats = () => {
    return {
        followers: 12254,
        likes: 9540,
        page_views: 26430,
        monthly_views: [
            { 'name': 'Jan', 'value': 1892 },
            { 'name': 'Feb', 'value': 3478 },
            { 'name': 'Mar', 'value': 2680 },
            { 'name': 'Apr', 'value': 4021 },
            { 'name': 'May', 'value': 1523 },
            { 'name': 'Jun', 'value': 3089 },
            { 'name': 'Jul', 'value': 2154 },
            { 'name': 'Aug', 'value': 1835 },
            { 'name': 'Sep', 'value': 2996 },
            { 'name': 'Oct', 'value': 1760 },
            { 'name': 'Nov', 'value': 2347 },
            { 'name': 'Dec', 'value': 1605 },
        ],
        views_per_country: {
            "Korea": 15325,
            "United States": 3215,
            "Europe": 4850,
            "Australia": 3130,
        },
        revenue_per_year: [
            {
                name: '2021',
                fill: '#9a62bd',
                value: 500
            },
            {
                name: '2022',
                fill: '#4b89b8',
                value: 1000
            },
            {
                name: '2023',
                fill: '#ebb257',
                value: 1500
            },
        ],
        demographic: [
            {
                name: '13-17',
                Men: 4000,
                Women: 2400,
                value: 2400,
              },
              {
                name: '18-24',
                Men: 3000,
                Women: 1398,
                value: 2210,
              },
              {
                name: '25-34',
                Men: 2000,
                Women: 9800,
                value: 2290,
              },
              {
                name: '35-44',
                Men: 2780,
                Women: 3908,
                value: 2000,
              },
        ]
    }
}

export default getStats;