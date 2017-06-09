let count = readline();
let nums = readline().split(' ').map(Number);
let seq;

for (let i = 0; i < nums.length; i++) {
  const a = nums[i];
  for (let j = i; j > 0 && a < nums[j - 1]; j--) {
    const b = nums[j];
    nums[j] = nums[j - 1];
    nums[j - 1] = b;
    const test = nums.join(' ');
    if (seq !== test) {
      print(test);
    }
    seq = test;
  }
  nums[j] = a;
}

if (!seq) {
  print('Already sorted');
}
