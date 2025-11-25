function saveExpense(expense) {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}

function deleteExpense(index) {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  location.reload(); // Refresh to update UI
}

function saveSettings() {
  const budget = document.getElementById("budget").value;
  const currency = document.getElementById("currency").value;
  const theme = document.getElementById("theme").value;

  const settings = { budget, currency, theme };
  localStorage.setItem("settings", JSON.stringify(settings));
  alert("Settings saved!");
}

// Load and process expenses
function loadAnalytics() {
  const expenses = getExpenses();
  const currentMonth = new Date().getMonth(); // 0 = Jan, 1 = Feb, etc.

  const monthlyExpenses = expenses.filter(exp => {
    const expMonth = new Date(exp.date).getMonth();
    return expMonth === currentMonth;
  });

  // Group by category
  const categoryTotals = {};
  monthlyExpenses.forEach(exp => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
  });

  // Render category chart
  const categoryCtx = document.getElementById('categoryChart').getContext('2d');
  new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(categoryTotals),
      datasets: [{
        data: Object.values(categoryTotals),
        backgroundColor: ['#f39c12', '#3498db', '#2ecc71', '#9b59b6']
      }]
    }
  });

  // Monthly trend (group by day)
  const dailyTotals = {};
  monthlyExpenses.forEach(exp => {
    const day = new Date(exp.date).getDate();
    dailyTotals[day] = (dailyTotals[day] || 0) + exp.amount;
  });

  const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
  new Chart(monthlyCtx, {
    type: 'line',
    data: {
      labels: Object.keys(dailyTotals),
      datasets: [{
        label: 'Daily Spending',
        data: Object.values(dailyTotals),
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74,144,226,0.2)',
        fill: true,
        tension: 0.3
      }]
    }
  });

  // Render expense list
  const listContainer = document.getElementById('monthly-expenses');
  listContainer.innerHTML = '';
  let total = 0;
  monthlyExpenses.forEach(exp => {
    total += exp.amount;
    const card = document.createElement('div');
    card.className = 'expense-card';
    card.innerHTML = `
      <span>${exp.desc} (${exp.category}) - ${exp.date}</span>
      <span class="amount">₹${exp.amount}</span>
    `;
    listContainer.appendChild(card);
  });

  document.getElementById('total-spent').innerText = `🧾 Total Spent This Month: ₹${total}`;
}

// Download JSON file
function downloadMonthlyJSON() {
  const expenses = getExpenses();
  const currentMonth = new Date().getMonth();
  const monthlyExpenses = expenses.filter(exp => new Date(exp.date).getMonth() === currentMonth);

  const blob = new Blob([JSON.stringify(monthlyExpenses, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'monthly-expenses.json';
  a.click();
  URL.revokeObjectURL(url);
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadAnalytics);
