export default function DateDiff(oldDate) {
    const date1 = new Date(oldDate).getTime();
    const date2 = new Date();
    const results = Math.floor((date2 - date1) / (60000 * 60));
    // 2 or more years
    if (results > 17520) {
        return `${Math.floor(results / 8759)} years ago`;
    }
    // 1 year
    if (results > 8759 && results < 17519) {
        return `${Math.floor(results / 8759)} year ago`;
    }
    // 2 to 11 months
    if (results > 1440) {
        return `${Math.floor(results / 696)} months ago`;
    }
    // 1 month
    if (results > 719 && results < 1439) {
        return `${Math.floor(results / 696)} month ago`;
    }
    // 2 to 30 days
    if (results > 48) {
        return `${Math.floor(results / 24)} days ago`;
    }
    // 1 day
    if (results > 24 && results < 47) {
        return `${Math.floor(results / 24)} day ago`;
    }
    // Less than a day
    return results;
}