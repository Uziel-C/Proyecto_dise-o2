const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    };
};
console.log(getRemainTime('January 06 2021 10:32:53 GMT-0500'));
/*function diahoy(){
    var hoy=new Date();
    document.write(hoy.toDateString());
}*/