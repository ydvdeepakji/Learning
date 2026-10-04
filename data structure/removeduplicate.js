let arr = [1,2,3,3,4,2,2,4,1,3,5]
let i = 0
let j = 1
arr = arr.sort((a,b)=> a-b) 
while (j<arr.length){
    if(arr[i]!==arr[j]){
        i++
        arr[i]=arr[j]
      j++
    }
    else j++
}
console.log(arr.slice(0,i+1))
// time complexity is O(n) and space complexity is O( n log n) sorting cost is n log n