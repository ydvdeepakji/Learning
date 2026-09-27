// target =6
let arr = [1, 2, 3, 4, 5, 6]
let target =6
let i = 0
let j = arr.length - 1
while (i < j)
{
    let sum = arr[i] + arr[j]
    if (sum < target) {
        i++
    }
    else if (sum === target)
    {
        console.log(arr[i], arr[j])
        break 
    }
    else j--
}