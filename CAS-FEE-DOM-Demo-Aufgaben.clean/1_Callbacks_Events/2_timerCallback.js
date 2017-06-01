function annouceFinished () {
    console.log('we are done waiting');
}

console.log('timer started');
setTimeout(annouceFinished, 500);


function countDown (start, waitTime) {
    waitedTimes = 0;
    const waitOnce = function () {
        waitedTimes++;
        if (waitedTimes < start) {
            console.log('Counting Down: '+ (start-waitedTimes)); //why brackets?
            setTimeout(waitOnce, waitTime);
        }else{
            console.log('we are done waiting');
        }
    };
    setTimeout(waitOnce, waitTime);
}

countDown(5, 500);

function countDown2 (start, waitTime) {
    if (start > 0) {
        console.log('Counting Down: ' + start);
        setTimeout(_ => countDown2(start - 1, waitTime), waitTime);
    } else {
        console.log('we are done waiting');
    }
}

countDown2(5, 500);