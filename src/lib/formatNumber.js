const formatNumber = (number) => {
    if (typeof number !== "number") return number;
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return `${formattedNumber}K`;
    } else {
      return number.toString();
    }
}

export const addCommas = (number) => {
    if (typeof number === "undefined") return number;
    // Convert the number to a string
    let numberStr = number.toString();

    // Use regex to add commas every three digits
    let formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedNumber;
}


export default formatNumber;