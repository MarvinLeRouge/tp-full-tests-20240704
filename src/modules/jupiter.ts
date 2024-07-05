export function calcHour(lune:1|2, terre:1|2, soleil: 1|2): number {
    let result = null;

    if((lune == 1) && (soleil == 1)) {
        return 0;
    }
    if((lune == 2) && (soleil == 1)) {
        return 1;
    }
    if((lune == 1) && (terre == 1) && (soleil == 2)) {
        return 5;
    }
    if((lune == 2) && (terre == 1) && (soleil == 2)) {
        return 4;
    }
    if((soleil == 2) && (terre == 2)) {
        return 6;        
    }

    return result;
}

export function hourLabel(hour:0|1|4|5|6): "mortin"|"aprenoon"|"soirning"|"nuight" {
    let result = null;

    if(hour <= 2) return "mortin";
    if(hour <= 4) return "aprenoon";
    if(hour <= 5) return "soirning";
    return "nuight";
}