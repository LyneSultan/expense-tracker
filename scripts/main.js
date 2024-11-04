function saveTransaction(transaction) {
  localStorage.setItem(`transaction_${transaction.id}`, JSON.stringify(transaction));
}
function addTransaction() {
  const title = document.getElementById('title').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;

  const transaction = {
    id: Date.now(),
    title: title,
    amount: amount,
    type: type,
    date: date,
    notes: notes
  };

  saveTransaction(transaction);

  document.getElementById('transaction-form').reset();
  displayTransactions();
  updateBudget();
}

function loadTransactions() {
  const transactions = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('transaction_')) {
      const transaction = JSON.parse(localStorage.getItem(key));
      transactions.push(transaction);
    }
  }
  return transactions;
}
function displayTransactions() {
  const transactions = filterTransactions();
  const transactionsList = document.getElementById('transactions');
  transactionsList.innerHTML = '';

  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.title}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td>${transaction.date}</td>
      <td>${transaction.notes}</td>
      <td>
        <button onclick="deleteTransaction(${transaction.id})">Delete</button>
        <button onclick="editTransaction(${transaction.id})">Edit</button>
      </td>
    `;
    transactionsList.appendChild(row);
  });
}
