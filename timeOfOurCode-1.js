function min5log(n) {
    // for (let i = 0; i <= Math.max(5, n); i++) {
    //     console.log(i)
    // }// 0(n)

    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}//0(1)
min5log(9)