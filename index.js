// code your solution here
function superbowlWin(record){

    const found = record.find((obj) => obj.result === "W");
if(found){
    return found.year
}
}

