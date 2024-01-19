import { PropTypes } from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className="p-6 flex-grow text-zinc-200 xl:mx-[0px] min-[1921px]:mx-[300px] relative">
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container;