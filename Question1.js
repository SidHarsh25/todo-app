const lengthOfLIS =(nums)=> {
    if (nums.length === 0) return 0;

    let lis = [];

    for (let num of nums) {
   
        let left = 0, right = lis.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (lis[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left === lis.length) {
            lis.push(num);
        } else {
            lis[left] = num;
        }
    }

    return lis;
}

// Example usage
let arr = [10, 9, 2, 5, 3, 7, 101, 18];
const liss = lengthOfLIS(arr);
console.log("Longest increasing subsequence ",liss); // Output: 4
console.log("Longest increasing subsequence Length ",liss.length); // Output: 4

