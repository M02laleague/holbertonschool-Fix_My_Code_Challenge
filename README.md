# Fix My Code Challenge

## Description

**Fix My Code Challenge** est un projet où vous devez analyser et corriger des codes existants. Le but est de comprendre des bases de code dysfonctionnelles et d'y apporter des correctifs sans tout réécrire. Ce projet vous aidera à développer vos compétences en débogage et à améliorer votre compréhension des langages de programmation.

---

## Table des matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Usage](#usage)
- [Tâches](#tâches)
  - [FizzBuzz](#fizzbuzz)
  - [Print Square](#print-square)
  - [Sort](#sort)
  - [User Password](#user-password)
  - [Double Linked List](#double-linked-list)
- [Contributeurs](#contributeurs)
- [Licence](#licence)

---

## Prérequis

- **Systèmes d'exploitation** : Ubuntu 20.04 LTS ou supérieur.
- **Éditeurs de texte** : `vim`, `emacs`, ou `vi`.
- Langages utilisés :
  - Python
  - JavaScript
  - Ruby
  - C

---

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/holbertonschool-Fix_My_Code_Challenge.git
   cd Fix_My_Code_Challenge
Assurez-vous d'avoir les outils nécessaires pour chaque langage :
Python (version 3.8 ou supérieure)
Node.js (pour JavaScript)
Ruby
Un compilateur C (comme gcc)
Usage
Naviguez vers les fichiers de la tâche que vous souhaitez corriger. Chaque fichier contient un code à déboguer et à améliorer.

Pour exécuter le code Python :

bash
Copier le code
python3 fichier.py
Pour exécuter le code JavaScript :

bash
Copier le code
node fichier.js
Pour exécuter le code Ruby :

bash
Copier le code
ruby fichier.rb
Pour compiler et exécuter le code C :

bash
Copier le code
gcc -Wall -pedantic -Werror -Wextra -std=gnu89 fichier.c -o executable
./executable
Tâches
FizzBuzz
Fichier : 0-fizzbuzz.py
Problème : Le nombre 15 ne retourne pas FizzBuzz, mais Fizz.
Correction : Ajouter une condition pour vérifier si un nombre est divisible par 3 et 5 avant les autres conditions.
Print Square
Fichier : 1-print_square.js
Problème : La taille du carré n'est pas respectée.
Correction : S'assurer que le script génère correctement une grille de taille n x n.
Sort
Fichier : 2-sort.rb
Problème : Les arguments ne sont pas triés correctement.
Correction : Convertir les arguments en entiers avant de les trier.
User Password
Fichier : 3-user.py
Problème : La méthode is_valid_password ne valide pas correctement les mots de passe.
Correction : Comparer le mot de passe fourni avec le mot de passe stocké de manière appropriée.
Double Linked List
Fichier : 4-delete_dnodeint/
Problème : Le programme ne met pas à jour correctement les pointeurs après une suppression dans une liste doublement chaînée.
Correction : Mettre à jour les pointeurs prev et next lors de la suppression d'un nœud.
Contributeurs
Diallo Salomon
Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.

