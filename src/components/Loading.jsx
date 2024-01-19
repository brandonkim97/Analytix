import { PuffLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="z-50">
            <PuffLoader 
                color="#36D7B7"
                size={150}
                loading={true}
            />
        </div>
    )
}

export default Loading;