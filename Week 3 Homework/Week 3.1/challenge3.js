function truncateString(str, maxLength){
    if (str.length > maxLength){
        return str.slice(0, maxLength - 3) + "..."
    } else {
        return str;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11))

function truncateString(str, maxLength){
    if (str.length > maxLength){
        return str.slice(0, maxLength - 3) + "..."
    } else {
        return str;
    }
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14))