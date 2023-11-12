function studentScore(nama: string, score: number): string {
  if (score >= 80 && score <= 100) {
    return `nama: ${nama}, score: A - Sangat Baik `;
  } else if (score >= 65 && score <= 79) {
    return `nama: ${nama}, score: B+ - Baik`;
  } else if (score >= 50 && score <= 64) {
    return `nama: ${nama}, score: B - Cukup Baik`;
  } else if (score >= 35 && score <= 49) {
    return `nama: ${nama}, score: C - Cukup`;
  } else if (score >= 0 && score <= 34) {
    return `nama: ${nama}, score: D - Tidak Lulus`;
  } else {
    return `nama: ${nama}, score: Invalid - Nilai Tidak Valid`;
  }
  
}

const namaStudent: string = "anam"
const scoreStudent: number = 90;

console.log(studentScore(namaStudent, scoreStudent));