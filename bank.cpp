#include <iostream>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    double balance;

public:
    BankAccount(string accNum) {
        accountNumber = accNum;
        balance = 0;
    }

    void deposit(double amount) {
        balance += amount;
        cout << "Deposit successful!" << endl;
    }

    void withdraw(double amount) {
        if (amount > balance) {
            cout << "Insufficient balance." << endl;
        } else {
            balance -= amount;
            cout << "Withdrawal successful!" << endl;
        }
    }

    void checkBalance() {
        cout << "Current Balance: " << balance << endl;
    }
};

int main() {
    BankAccount myAccount("ACC123");

    myAccount.deposit(1000);
    myAccount.withdraw(300);
    myAccount.checkBalance();

    return 0;
}
