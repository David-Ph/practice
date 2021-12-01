function solution(times, fakeToday){
    const todayMillis = fakeToday.getTime();

    let currentShortest = {
        time: fakeToday,
        diff: todayMillis
    };

    times.forEach((time) => {
        const milis = Math.abs(time - todayMillis);

        if(milis < currentShortest.diff){
            currentShortest = {
                time: time,
                diff: milis
            }
        }
    })

    return new Date(currentShortest.time);
}

const time1 = new Date().getTime() + 45000000;
const time2 = new Date().getTime() + 50000000;
const time3 = new Date().getTime() + 30000000;


console.log(solution([time1, time2, time3], new Date()))