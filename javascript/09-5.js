// function getData1() {
//     return new Promise();
// }

// async function getData2() {

// }

// getData1().then(r => console.log(r));
// getData2().then(r => console.log(r));


// then 실행함수 매개변수로 값 넘기는 방법
function getData3() {
    return new Promise((rs, rj) => {
        rs("데이터");
    });
}

async function getData4() {
     return "데이터";
}

getData3().then(r => console.log(r));
getData4().then(r => console.log(r));

// catch 실행함수의 매개변수로 값 넘기는 방법
function getData5(isError) {
    return new Promise((rs, rj) => {
        if (isError) {
            rj(new Error("오류!"));
            return;
        }
        rs("데이터");
    });
}

async function getData6(isError) {
    if (isError) throw new Error("오류!");
    return "데이터";
}

getData5(true).then(r => console.log(r)).catch(e => console.error(e));
getData6(true).then(r => console.log(r)).catch(e => console.error(e));

// await으로 then 또는 catch 처리방법
console.log(await getData3());  // resolve의 매개변수 값 바로 받아옴.
console.log(await getData4());  // return 값 바로 받아옴.

try {
    console.log(await getData5());
} catch (error) {
    console.error(error);
}

try {
    console.log(await getData6());
} catch (error) {
    console.error(error);
}

async function fx() {
    try {
        console.log(await getData5());
    } catch (error) {
        console.error(error);
    }
}