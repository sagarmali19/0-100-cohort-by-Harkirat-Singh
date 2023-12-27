/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // transactions -> List of object -> { itemName, category, price, timestamp }
  // Example -> transaction = [{sugar,kirana,20,21/12},{car,showroom,200,22/12},{pen,stationary,2,23/12}]
  const listOfCategoriesWithPrice = [];
  // traverse the transaction list
  // for new category -> it is added with its price
  // for existing category -> its price is added to that category
  const categoryList = [...new Set(transactions.map(transaction => transaction.category))];
  // ... -> spread operator
  // It is used to convert set back to array
  for(let i = 0; i < categoryList.length; i++){
    // Extracting current category from categoryList  
    const category = categoryList[i];
    let totalPriceForCategory = 0;
    // traverse transaction list and add the prices if category found
    for(let j = 0; j < transactions.length; j++){
      if(transactions[j].category == category){
        totalPriceForCategory += transactions[j].price;
      }
    }
    listOfCategoriesWithPrice.push({category, totalSpent:totalPriceForCategory});
  }
  return listOfCategoriesWithPrice;
}

module.exports = calculateTotalSpentByCategory;
