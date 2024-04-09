const fruits = [
  {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
  },
  {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
  },
  {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
  },
  {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
  },
  {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
  },
  {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
  },
  {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
  }
];

// Langkah 1: Menghilangkan duplikasi nama buah dan membuat objek unik
const uniqueFruitNames = [...new Set(fruits.map(fruit => fruit.fruitName.toLowerCase()))];

console.log("1. Buah apa saja yang dimiliki Andi?");
console.log("   - " + uniqueFruitNames.join(", "));

// Langkah 2: Memisahkan buah berdasarkan tipe dan menghitung total stock
const containers = {};
const totalStockPerContainer = {};

fruits.forEach(fruit => {
  const lowercaseName = fruit.fruitName.toLowerCase();
  if (!containers[fruit.fruitType]) {
      containers[fruit.fruitType] = [];
      totalStockPerContainer[fruit.fruitType] = 0;
  }
  if (!containers[fruit.fruitType].includes(lowercaseName)) {
      containers[fruit.fruitType].push(lowercaseName);
  }
  totalStockPerContainer[fruit.fruitType] += fruit.stock;
});

const containerCount = Object.keys(containers).length;

console.log("\n2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType).");
console.log(`   - Jumlah wadah yang dibutuhkan: ${containerCount}`);
console.log("   - Buah di masing-masing wadah:");
Object.keys(containers).forEach(containerType => {
  console.log(`     - ${containerType}: ${containers[containerType].join(", ")}`);
});

// Langkah 3: Menghitung total stock buah di masing-masing wadah
console.log("\n3. Berapa total stock buah yang ada di masing-masing wadah?");
console.log("   - Total stock buah di masing-masing wadah:");
Object.keys(totalStockPerContainer).forEach(containerType => {
  console.log(`     - ${containerType}: ${totalStockPerContainer[containerType]}`);
});

// Langkah 4: Apakah ada komentar terkait kasus di atas?
// Dalam data buah, terdapat duplikasi fruitId yang bisa menyebabkan masalah dalam pengolahan data. Sebaiknya, fruitId harus unik untuk setiap buah.")