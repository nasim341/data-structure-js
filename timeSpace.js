function uniqueName(arr) {
    let uniqueName = []
    for (i = 0; i < arr.length; i++) {

        let element = arr[i]

        if (!uniqueName.includes(element)) {
            uniqueName.push(element)
        }
    }
    return uniqueName
}
let nameArr = ["Nasim", "Azman", "Nijhum", "Nasim"];
console.log(uniqueName(nameArr))
//time complexity ==n2
//space complexity ==n
