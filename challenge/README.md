
Here is the README.md translated into English for your Fix My Code Challenge project:

Fix My Code Challenge
Welcome to the Fix My Code Challenge project. This project involves debugging and fixing errors in existing programs written in Python, JavaScript, Ruby, and C. Each task includes a program with incorrect behavior that needs to be analyzed and fixed.

Project Structure
This project is organized as follows:

css
Copier le code
holbertonschool-Fix_My_Code_Challenge/
│
├── challenge/
│   ├── 0-fizzbuzz.py
│   ├── 1-print_square.js
│   ├── 2-sort.rb
│   ├── 3-user.py
│   └── 4-delete_dnodeint/
│       ├── main.c
│       ├── free_dlistint.c
│       ├── print_dlistint.c
│       ├── add_dnodeint_end.c
│       └── delete_dnodeint_at_index.c
│
└── README.md
Tasks and Solutions
Task 0: FizzBuzz (Python)
File: 0-fizzbuzz.py
Problem: The program does not replace multiples of 15 with "FizzBuzz" correctly.
Solution: Add a condition to check if the number is divisible by 15 before checking the other cases (3 and 5).
Command to test:
bash
Copier le code
python3 0-fizzbuzz.py 50
Task 1: Print Square (JavaScript)
File: 1-print_square.js
Problem: The program does not generate a square of the correct size.
Solution: Fix the loop logic to generate a grid of # characters with the given dimension (size).
Command to test:
bash
Copier le code
node 1-print_square.js 4
Task 2: Sort (Ruby)
File: 2-sort.rb
Problem: The program does not sort the arguments correctly, mixing numbers and strings improperly.
Solution: Use a sorting method that handles both numbers and strings appropriately.
Command to test:
bash
Copier le code
ruby 2-sort.rb 12 41 2 C 9 -9 31 fun -1 32
Task 3: User Password (Python)
File: 3-user.py
Problem: The is_valid_password method does not correctly validate passwords.
Solution: Fix the method to properly compare the user’s password with the stored password.
Command to test:
bash
Copier le code
python3 3-user.py
Task 4: Double Linked List (C)
Folder: 4-delete_dnodeint
Problem: Operations on the doubly linked list (add, delete, print) do not work correctly.
Solution:
Fix the delete_dnodeint_at_index function to handle indexes properly.
Revise add_dnodeint_end, free_dlistint, and print_dlistint functions.
Command to compile and test:
bash
Copier le code
gcc -Wall -pedantic -Werror -Wextra -std=gnu89 main.c free_dlistint.c print_dlistint.c add_dnodeint_end.c delete_dnodeint_at_index.c -o delete_dnodeint
./delete_dnodeint
How to Contribute
Clone the repository:
bash
Copier le code
git clone <your-repository-link>
Test the files and identify issues.
Submit your fixes.
Authors
Salomon
Holberton School
License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.