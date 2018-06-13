module.exports = {

    clockHands: (time) => {
        
        //calculate hand degrees
        let wHand = ((time/604800)* 360) % 360;
        wHand = (Math.floor(wHand*100))/100;

        let hHand = ((time/3600)*30) % 360;
        hHand = (Math.floor(hHand*100))/100;

        let mHand = ((time/60)*6) % 360;
        mHand = (Math.floor(mHand*100))/100;

        let sHand = ((time)*6) % 360;

        let clockFace = {
            week: `Week Hand: ${wHand} deg`, 
            hour: `Hour Hand: ${hHand} deg`, 
            minute: `Minute Hand: ${mHand} deg`, 
            seconds: `Second Hand: ${sHand} deg`
        }

        // console.log(" ");
        // console.log("Time: " + time);
        // console.log(".................................")
        // console.log("------------Clock Face-----------")
        // console.log(clockFace);
        // console.log(".................................")

        return clockFace;
    },
    
    digitalTime: (time) => {
        let timeRemain = time;
        const timeFormat = 12;

        // set digits
        let hours = Math.floor(timeRemain/3600);
        timeRemain -= hours*3600;
        
        let minutes = Math.floor(timeRemain/60);
        timeRemain -= minutes*60;
    
        // set DoW
        let dayofWeek = Math.floor(hours/24);
        switch(dayofWeek) {
            case 0:
                dayofWeek = 'Monday';
                break;
            case 1:
                dayofWeek = 'Tuesday';
                break;
            case 2:
                dayofWeek = 'Wednesday';
                break;
            case 3:
                dayofWeek = 'Thursday';
                break;
            case 4:
                dayofWeek = 'Friday';
                break;
            case 5:
                dayofWeek = 'Saturday';
                break;
            case 6:
                dayofWeek = 'Sunday';
                break;
            default:
                dayofWeek = 'time to get a new clock, this one broke';
                break;
        }
        
        //AM or PM
        let ToD;
        if(hours % 24 < 12) { ToD = "AM" }
        else { ToD = "PM "}
    
        let digitalOutput = {
            hours: hours % timeFormat,
            minutes: minutes,
            seconds: timeRemain,
            ToD: ToD
        }

        // console.log(" ");
        // console.log("Time: " + time);
        // console.log(".................................")
        // console.log("-----------Digital Clock---------")
        // console.log(digitalOutput);
        // console.log('day of week: ' + dayofWeek);
        // console.log(".................................")

        return digitalOutput;
    }
}