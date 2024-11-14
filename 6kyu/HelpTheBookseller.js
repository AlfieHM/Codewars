// Description:
// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"

function stockList(books, categories) {
  if(books.length===0){
    return ''
  }  
  let quantity = {}
    for(let i=0;i<categories.length;i++){
      quantity[categories[i]]=0
    }
  for(let i=0;i<books.length;i++){
    if(books[i][0] in quantity){
    let arr = books[i].split(' ') 
    let val = Number(arr[1])
    quantity[books[i][0]]+=val
    }}
 let ans = []
  for(const key in quantity){
    ans.push('('+key + ' : ' + quantity[key]+')')
  }
  return ans.join(' - ')
}
