function isPalindrome(str: string): boolean {
    const formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Menghilangkan spasi dan karakter spesial

    for (let i = 0; i < formattedStr.length / 2; i++) {
        if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
            return false; // Jika tidak sama, bukan palindrom
        }
    }
    return true; // Jika berhasil melewati loop, itu merupakan palindrom
}


console.log(isPalindrome("civic")); //true
console.log(isPalindrome("katak")); //true
console.log(isPalindrome("kasur rusak")); //true
console.log(isPalindrome("kupu-kupu")); //false
console.log(isPalindrome("lion")); //false
