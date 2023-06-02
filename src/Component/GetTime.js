const GetTime = (timeStamp) => {
    let date = new Date(timeStamp);
    let hours = date.getUTCHours().toString().padStart(2,0)
    let minutes = date.getUTCMinutes().toString().padStart(2,0)
    if(hours > 12) {
        hours = hours - 12 ;
    }
    return hours + ":" + minutes;
}
export default GetTime;