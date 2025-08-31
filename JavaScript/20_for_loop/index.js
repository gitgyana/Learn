// for loop = repeat some code a LIMITED amount of times

for(let i = 10; i >= 0; i--) {
    console.log(i);
}

for(let i = 1; i <= 20; i++) {

    if(i == 13){
        continue;
    }
    else if(i == 18) {
        break;
    }
    else {
        console.log(i);
    }
}
