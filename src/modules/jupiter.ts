export type CadranValue=1|2
export function calcHour(lune:CadranValue, terre:CadranValue, soleil: CadranValue): 0|1|4|5|6 {
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

    return 0;
}

export function hourLabel(hour:0|1|4|5|6): "mortin"|"aprenoon"|"soirning"|"nuight" {
    if(hour <= 2) return "mortin";
    if(hour <= 4) return "aprenoon";
    if(hour <= 5) return "soirning"; 
    return "nuight";
}