# Junior Fullstack - Technical Test



## Ketentuan

- Buatlah fungsi menggunakan bahasa pemrograman dan framework apapun untuk
menjawab soal-soal di bawah ini. Kemudian, temukan jawabannya.

- Jika diperlukan, buat 1 repository di github atau gitlab untuk submit source code
(berikan akses ke email aditia.prasetio@qbit.co.id agar bisa mengakses
repository'nya).

## Questions

### Case 1 (Soal No.1-4)

Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini
adalah sebagai berikut.

```typescript
interface IFruit {
    fruitId: number;
    fruitName: string;
    fruitType: 'IMPORT' | 'LOCAL';
    stock: number;
}

const fruits: IFruit[] = [
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

```

1. Buah apa saja yang dimiliki Andi? (fruitName)
2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
masing-masing wadah?
3. Berapa total stock buah yang ada di masing-masing wadah?
4. Apakah ada komentar terkait kasus di atas?

---

### Case 2 (Soal No.5)

Diketahui data berikut ini.

```typescript
type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
}

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
];
```

5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

---

### Case 3

6. Buatlah minimal 1 halaman untuk memperkenalkan sebuah UMKM. Desain bebas.
Buatlah semenarik mungkin. Boleh dibuat sebagai website ataupun mobile app
(bebas pilih). Jika diperlukan, diperbolehkan untuk membuat backend sederhana.



# case_3

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
