var N = Number(readline());

print('#'.repeat(N));

for (var i = 0; i < (N - 2); i++) {
  print('#'+(' '.repeat(N-2))+'#');
}

if (N > 1) {
  print('#'.repeat(N));
}
