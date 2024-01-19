const getCompanyData = () => {
    const companies = [
        { logo: 'public/images/analytix.png', url: '/', name: 'Analytix', at: '@analytix', isActive: true, rate: 2, posts: 4, views: 31000, actions: 1302, fans: 1202},
        { logo: 'public/images/nextbnb.png', url: 'https://github.com/brandonkim97/nextbnb', name: 'nextbnb', at: '@nextbnb', isActive: true, rate: -12, posts: 7, views: 15000, actions: 2451, fans: 524},
        { logo: 'public/images/placeholder.jpg', url: 'https://github.com/brandonkim97/VegHub', name: 'VegHub', at: '@veghub', isActive: false, rate: 0, posts: 2, views: 4000, actions: 552, fans: 45},
    ];

    return companies;
}

export default getCompanyData;