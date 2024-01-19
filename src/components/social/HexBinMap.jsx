import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const HexBinMap = ({ width, height, data }) => {
    const [allSvgPaths, setAllSvgPaths] = useState(null);

    const scale = Math.min((width - 1) / (2.2 * Math.PI), height / Math.PI);
    useEffect(() => {
        if (!data) return;
        const projection = d3
        .geoMercator()
        .scale(scale)
        .translate([width / 2, height / 1.5])

        const geoPathGenerator = d3.geoPath().projection(projection);

        setAllSvgPaths(data.features
            .filter((shape) => shape.id !== 'ATA')
            .map((shape) => {
                return (
                    <path
                    key={shape.id}
                    d={geoPathGenerator(shape)}
                    stroke="lightGrey"
                    strokeWidth={0.5}
                    fill="grey"
                    fillOpacity={0.7}
                    />
                );
            }));
    }, [data, width, height, scale]);
  

  return (
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
  );
};

HexBinMap.propTypes = {
    width: PropTypes.node,
    height: PropTypes.node,
    data: PropTypes.any,
}

export default HexBinMap;
