export function knapsack(maxWeight, items) {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(maxWeight + 1).fill(0));
  const includedIds = [];

  for (let i = 1; i <= n; i++) {
    const { weight, price, id } = items[i - 1];

    for (let j = 1; j <= maxWeight; j++) {
      if (weight <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + price);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  let j = maxWeight;
  for (let i = n; i > 0 && j > 0; i--) {
    if (dp[i][j] !== dp[i - 1][j]) {
      includedIds.push(items[i - 1].id);
      j -= items[i - 1].weight;
    }
  }

  return includedIds;
}

// const items = [
//   { id: 1, price: 10, weight: 2 },
//   { id: 2, price: 20, weight: 3 },
//   { id: 3, price: 30, weight: 4 },
//   { id: 4, price: 40, weight: 5 }
// ];
// const maxWeight = 8;
// const includedIds = knapsack(maxWeight, items);
// console.log(includedIds);