function TimeMachine(year) {
    let month = 1;
    let dom = 1;
    let days = 256;
    let calendar = '';
    let travel = true;
    
    if (year === 1918) {
        calendar = 'Transition';
    }
    else if (year >= 1700 <= 1917) {
        calendar = 'Julian';
    }
    else if (year >= 1919 <= 2700) {
        calendar = 'Gregorian';
    }
    else {
        console.log('time machine is too stupid to go to those years');
        return false;
    }

    switch(calendar) {
        case 'Julian':
            while(travel) {
                if (month === 2) {
                    if (year % 4 === 0) {
                        console.log('leap julian');
                        days -= 29;
                    }
                    else {
                        days -= 28;
                        console.log('normal julian');
                    }
                }
                else if (month % 2 != 0) {
                    days -= 31;
                }
                else {
                    days -= 30;
                }
                if (days > 0) {
                    month++
                }
                else {
                    travel = false;
                    if (month % 2 === 0) {
                        dom = 29 + days;
                    }
                    else {
                        dom = 30 + days;
                    }
                    console.log(dom, month, year);
                }
            }
            break;
        case 'Gregorian':
            while(travel) {
                if (month === 2) {
                    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                        days -= 29;
                        console.log('leap gregorian');
                    }
                    else {
                        days -= 28;
                        console.log('normal gregorian');
                    }
                }
                else if (month % 2 != 0) {
                    days -= 31;
                }
                else {
                    days -= 30;
                }
                if (days > 0) {
                    month++
                }
                else {
                    travel = false;
                    if (month % 2 === 0) {
                        dom = 29 + days;
                    }
                    else {
                        dom = 30 + days;
                    }
                    console.log(dom, month, year);
                }
            }
            break;

        case 'Transition':
            while(travel) {
                if (month === 2) {
                    console.log('transition februrary')
                    days -= 14;
                }
                else if (month % 2 != 0) {
                    days -= 31;
                }
                else {
                    days -= 30;
                }
                if (days > 0) {
                    month++
                }
                else {
                    travel = false;
                    if (month % 2 === 0) {
                        dom = 29 + days;
                    }
                    else {
                        dom = 30 + days;
                    }
                    console.log(dom, month, year);
                }
            }
            break;
    }
    let strdom = dom.toString();
    let strmonth = month.toString();
    let stryear = year.toString();
    strmonth.length == 1 ? strmonth = `0${month}` : strmonth = strmonth;
    
    let result = `${strdom}.${strmonth}.${stryear}`;
    console.log(result);
    return result;    
}

TimeMachine(1740);
TimeMachine(2017);
TimeMachine(1918);
TimeMachine(2100);

// julian leap year messed up somehow - i dont know
// better question is here's the solution in python...

/*
def solve(year):
    if (year == 1918):
        return '26.09.1918'
    elif ((year <= 1917) & (year%4 == 0)) or ((year > 1918) & (year%400 == 0 or ((year%4 == 0) & (year%100 != 0)))):
        return '12.09.%s' %year
    else:
        return '13.09.%s' %year
*/