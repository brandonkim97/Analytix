import Header from "../components/Header";
import ShadowBox from "../components/ShadowBox";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useState, useEffect } from 'react';
import getStats from "../services/getStats";
import { addCommas } from "../lib/formatNumber";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PropTypes from 'prop-types';
import ViewBarChart from "../components/social/ViewBarChart";
import RevenueBarChart from "../components/social/RevenueBarChart";
import AudienceBarChart from "../components/social/AudienceBarChart";
import USHexbinMap from "../components/social/HexBinMap";
import jsonData from "../services/getGeoJSONData";
import CountryReach from "../components/social/countryReach";

const UserStat = ({ icon, label, data, rate }) => {
    return (
        <ShadowBox classes="flex flex-col justify-center company-color h-44 p-4 2xl:px-8 gap-4">   
            <div className="flex gap-2 items-center max-sm:justify-center">
                {icon}
                <div className="text-color text-xl">{label}</div>
            </div>
            <div className="flex gap-8 max-sm:justify-center">
                <div className="text-4xl">{addCommas(data)}</div>
                <div className={`flex gap-2 items-center ${rate > 0 ? 'text-green-700' : 'text-red-700'}`}>
                    <div>{rate > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}</div>
                    <div>{`${rate}%`}</div>
                </div>
            </div>
        </ShadowBox> 
    )
}

const Statistic = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getStatistics = async () => {
            const d = await getStats();
            setData(d);
        }
        getStatistics();
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-col xl:flex-row">
                <div className="flex flex-col w-full xl:w-3/4 xl:mr-8">
                    <div className="font-semibold text-2xl max-md:text-center text-white w-full lg:w-1/2">Social Media Statistic</div>
                    <div className="sm:grid sm:grid-cols-3 gap-6 flex flex-col my-6">  
                        <UserStat 
                            icon={<AccountCircleIcon fontSize="large" />} 
                            label="Followers"
                            data={data.followers}
                            rate={14.2}
                        />
                        <UserStat 
                            icon={<FavoriteIcon fontSize="large" />} 
                            label="Likes"
                            data={data.likes}
                            rate={-14.2}
                        /> 
                        <UserStat 
                            icon={<VisibilityIcon fontSize="large" />} 
                            label="Page Views"
                            data={data.page_views}
                            rate={14.2}
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <ShadowBox classes="w-full h-96 p-4 2xl:px-8">   
                                <div className="company-color font-semibold text-xl">
                                    Views
                                </div>
                                <div className="w-full my-2">
                                    <ViewBarChart data={data.monthly_views} />
                                </div>
                        </ShadowBox>  
                        <ShadowBox classes="w-full p-4 2xl:px-8">   
                                <div className="flex flex-col sm:flex-row company-color sm:gap-20">
                                    <USHexbinMap data={jsonData} width={350} height={250} />
                                    <div className="flex flex-col grow pt-3 pr-8">
                                        <div className="flex justify-between pb-4">
                                            <div>Reach</div>
                                            <div>Country</div>
                                        </div>
                                        {data.views_per_country && Object.entries(data.views_per_country).map(([country, views]) => (
                                            <div key={country}>
                                                <CountryReach country={country} views={views} totalViews={data.page_views} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        </ShadowBox>  
                    </div>
                </div>
                <div className="flex flex-col w-full xl:w-1/4 gap-6 mt-6 xl:mt-0">
                    <ShadowBox classes="h-64 p-4 flex flex-col items-center content-center gap-4">
                        <div className="w-28 h-28">
                            <img src="public/images/placeholder.jpg" className="rounded-full" />
                        </div>
                        <div>Software Engineer</div>
                        <div className="flex flex-row mt-auto gap-12">
                            <div className="flex flex-col items-center">
                                <div className="text-2xl">25.5K</div>
                                <div className="text-xs text-color">Followers</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl">5.5K</div>
                                <div className="text-xs text-color">Following</div>
                            </div>
                        </div>
                    </ShadowBox>
                    <ShadowBox classes="h-96 p-4 flex flex-col">
                        <div className="company-color font-semibold">
                            Revenue
                        </div>
                        <div className="h-full">
                            <RevenueBarChart data={data.revenue_per_year} />
                        </div>
                    </ShadowBox>
                    <ShadowBox classes="flex flex-col h-64 p-4 grow">
                        <div className="company-color font-semibold">
                            Audience by Age
                        </div>
                        <div className="flex-1">
                            <AudienceBarChart data={data.demographic} />
                        </div>
                    </ShadowBox>
                </div>
            </div>
        </>
    )
}

UserStat.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    data: PropTypes.any,
    rate: PropTypes.number
}

export default Statistic;