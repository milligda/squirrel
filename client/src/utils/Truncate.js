
const Truncate = (string) => {

    // set the max length and truncated length
    const maxLength = 30;
    const length = maxLength - 3;

    // determine the length of the string
    const stringLength = string.length;

    // truncate the string
    let truncatedString = string;

    if (stringLength > maxLength) {
        truncatedString = string.substring(0, length);
        truncatedString = truncatedString + "...";
    }
    
    return truncatedString;
}

export default Truncate;