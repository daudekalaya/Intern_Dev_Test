const comments = [
  {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
          {
              commentId: 11,
              commentContent: 'Hai juga',
              replies: [
                  { commentId: 111, commentContent: 'Haai juga hai jugaa' },
                  { commentId: 112, commentContent: 'Haai juga hai jugaa' }
              ]
          },
          {
              commentId: 12,
              commentContent: 'Hai juga',
              replies: [{ commentId: 121, commentContent: 'Haai juga hai jugaa' }]
          }
      ]
  },
  { commentId: 2, commentContent: 'Halooo' }
];

// Langkah 5: Fungsi untuk menghitung total komentar termasuk balasan
function countTotalComments(comments) {
  let totalComments = comments.length;
  comments.forEach(comment => {
      if (comment.replies) {
          totalComments += countTotalComments(comment.replies);
      }
  });
  return totalComments;
}

const totalComments = countTotalComments(comments); // Inisialisasi variabel totalComments
console.log("\n5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.`");
console.log(`   - Total komentar: ${totalComments}`);
