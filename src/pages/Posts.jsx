import { lazy, Suspense } from 'react';
import Header from "../components/Header";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ShadowBox from "../components/ShadowBox";
import getPosts from "../services/getPosts";
import { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import formatNumber from '../lib/formatNumber';
import Timeline from '../components/Timeline';

//lazy load post images
const LazyLoadedPost = lazy(() => import('../services/LazyLoadedPost'));

const PostStats = ({ icon, data }) => {
    return (
        <div className="flex flex-row gap-1 items-center">
            <div>{icon}</div>
            <div>{formatNumber(data)}</div>
        </div>
    )
}

const Post = ({ data }) => {
    return (
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <ShadowBox>
                <div className="h-[400px] flex flex-col">
                    <div className="h-3/4">
                        <LazyLoadedPost imagePath={data.image} className="h-full w-full rounded-lg" />
                    </div>
                    <div className="h-1/4 flex flex-row items-center p-3 text-sm gap-4">
                        <PostStats 
                            icon={<FavoriteBorderOutlinedIcon fontSize="small" />} 
                            data={data.likes}
                        />
                        <PostStats 
                            icon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />} 
                            data={data.comments}
                        />
                        <PostStats 
                            icon={<SentimentSatisfiedAltOutlinedIcon fontSize="small" />} 
                            data={`${data.impression}%`}
                        />
                    </div>
                </div>
            </ShadowBox>
        </div>
    )
}

const Posts = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const getPostData = async () => {
            const posts = await getPosts();
            setPostData(posts);
        }
        
        getPostData();
    }, []);

    return (
        <>
            <Header label="" />
            <div className="flex flex-row items-center gap-6 text-color">
                <div className="font-semibold text-2xl text-white w-1/2">Social Media Posts</div>
                <div className="flex flex-row gap-6 w-1/2 justify-end">
                    <div className="hover:cursor-pointer">
                        <ShadowBox classes="p-2" hover>
                            <FileUploadOutlinedIcon />
                        </ShadowBox>
                    </div>
                    <Timeline />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6 my-8 text-color">
                <Suspense fallback={<Loading />}>
                    {postData.map((item, index) => (
                        <div key={item.image + index}>
                            <Post data={item} />
                        </div>
                    ))}
                </Suspense>
            </div>
        </>
    )
}

PostStats.propTypes = {
    icon: PropTypes.node,
    data: PropTypes.any,
}

Post.propTypes = {
    data: PropTypes.object,
}

export default Posts;