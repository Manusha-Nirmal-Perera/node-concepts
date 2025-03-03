

function delayFn(time){
    return new Promise(resolve=> setTimeout(resolve, time));
}

async function delayedGreed(name){
    await delayFn(2000);
    console.log(`Welocme ${name}!`);
} 

delayedGreed("Nirmal");


async function division(num1, num2){
    try{
        if(num2== 0){
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }catch(error){
        console.error("error", error);
        return null;
    }
}


async function mainFn(){
    console.log(await division(1,2));
    console.log(await division(1,0));
}

mainFn();