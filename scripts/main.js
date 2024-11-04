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
