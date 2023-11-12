function hitungPerpangkatan(x: number, n: number): number {
    if (n < 0){
        return NaN;
    } else{
        return Math.pow(x, n);
    }
}

// Contoh penggunaan
console.log(hitungPerpangkatan(2, 3)); // Output: 8
console.log(hitungPerpangkatan(2, 12)); // output: 4096
console.log(hitungPerpangkatan(7, 2)); // Output: 49
console.log(hitungPerpangkatan(9, 3)); // output: 729
console.log(hitungPerpangkatan(22, 5)); // output: 5153632
console.log(hitungPerpangkatan(1996, 0)); // output: 1
console.log(hitungPerpangkatan(4213, -3)); // output: NaN atau kesalahan input
