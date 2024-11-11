// Об'єкт банківського рахунку
const bankAccount = {
ownerName: "Іван Іванов",
accountNumber: "UA123456789",
balance: 0,

deposit(amount) {
    this.balance += amount;
    this.displayBalance();
},

// Метод зняття грошей з рахунку
withdraw(amount) {
    if (this.balance >= amount) {
    this.balance -= amount;
    this.displayBalance();
    } else {
    alert("Недостатньо коштів на рахунку!");
    }
},

displayBalance() {
    document.getElementById('balanceDisplay').textContent = `Баланс: ${this.balance} грн`;
}
};

const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const amountInput = document.getElementById('amountInput');

depositButton.addEventListener('click', function() {
const amount = parseFloat(amountInput.value);
if (isNaN(amount) || amount <= 0) {
    alert("Будь ласка, введіть коректну суму.");
} else {
    bankAccount.deposit(amount);
}
amountInput.value = '';
});

withdrawButton.addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Будь ласка, введіть коректну суму.");
    } else {
        bankAccount.withdraw(amount);
    }
    amountInput.value = '';
});
