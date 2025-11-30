const questions = [
  {
    "questionNumber": 1,
    "question": "Soit la suite définie pour tout $n \\in \\mathbb{N}$ par $U_n = n^2 - 3n + 1$. Quel est le quatrième terme de la suite, noté $U_3$ (si la suite commence à $U_0$)?",
    "answerOptions": [
      { "text": "$U_3 = 1$", "isCorrect": true },
      { "text": "$U_3 = 11$", "isCorrect": false },
      { "text": "$U_4 = 5$", "isCorrect": false },
      { "text": "$U_0 = 1$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 2,
    "question": "Soit la suite $(V_n)$ définie par $V_0 = 5$ et $V_{n+1} = 2V_n - 3$. Calculez le terme $V_2$.",
    "answerOptions": [
      { "text": "$V_2 = 11$", "isCorrect": true },
      { "text": "$V_2 = 7$", "isCorrect": false },
      { "text": "$V_2 = 8$", "isCorrect": false },
      { "text": "$V_2 = 17$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 3,
    "question": "Une suite numérique $(U_n)$ est dite **décroissante** si, pour tout entier naturel $n$, on a :",
    "answerOptions": [
      { "text": "$U_{n+1} \\le U_n$", "isCorrect": true },
      { "text": "$U_{n+1} < U_n$", "isCorrect": false },
      { "text": "$U_{n+1} \\ge U_n$", "isCorrect": false },
      { "text": "$U_{n+1} = U_n$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 4,
    "question": "Soit la suite $(U_n)$ définie par $U_n = -n^2 + 5n$ pour $n \\in \\mathbb{N}$. Quelle est la nature de sa monotonie (en utilisant la méthode de la différence $U_{n+1} - U_n$)?",
    "answerOptions": [
      { "text": "Croissante jusqu'à $n=2$ puis décroissante", "isCorrect": true },
      { "text": "Décroissante dès le premier terme", "isCorrect": false },
      { "text": "Toujours croissante", "isCorrect": false },
      { "text": "Alternée", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 5,
    "question": "Soit $(V_n)$ une suite définie pour $n \\ge 1$ par $V_n = \\frac{4^n}{n!}$. La suite est-elle strictement décroissante à partir d'un certain rang? Si oui, lequel (en utilisant la méthode du quotient $\\frac{V_{n+1}}{V_n}$)?",
    "answerOptions": [
      { "text": "$n \\ge 4$", "isCorrect": true },
      { "text": "$n \\ge 3$", "isCorrect": false },
      { "text": "$n \\ge 2$", "isCorrect": false },
      { "text": "Jamais strictement décroissante", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 6,
    "question": "La suite $(U_n)$ est définie par $U_n = 5n - 8$. Quelle est sa nature et sa raison $r$?",
    "answerOptions": [
      { "text": "Arithmétique de raison $r = 5$", "isCorrect": true },
      { "text": "Arithmétique de raison $r = -8$", "isCorrect": false },
      { "text": "Géométrique de raison $q = 5$", "isCorrect": false },
      { "text": "Arithmétique de raison $r = 5n$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 7,
    "question": "Soit une suite arithmétique de premier terme $U_0 = 10$ et de raison $r = -3$. Calculez le terme $U_{15}$.",
    "answerOptions": [
      { "text": "$U_{15} = -35$", "isCorrect": true },
      { "text": "$U_{15} = -45$", "isCorrect": false },
      { "text": "$U_{15} = 55$", "isCorrect": false },
      { "text": "$U_{15} = 35$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 8,
    "question": "Une suite arithmétique $(U_n)$ vérifie $U_5 = 16$ et $U_{10} = 31$. Quelle est sa raison $r$?",
    "answerOptions": [
      { "text": "$r = 3$", "isCorrect": true },
      { "text": "$r = 1.5$", "isCorrect": false },
      { "text": "$r = 5$", "isCorrect": false },
      { "text": "$r = 15$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 9,
    "question": "Calculez la somme $S = 1 + 4 + 7 + \\dots + 40$.",
    "answerOptions": [
      { "text": "$S = 287$", "isCorrect": true },
      { "text": "$S = 280$", "isCorrect": false },
      { "text": "$S = 140$", "isCorrect": false },
      { "text": "$S = 39$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 10,
    "question": "Calculez la somme $T = 2 + 4 + 6 + \\dots + 50$.",
    "answerOptions": [
      { "text": "$T = 650$", "isCorrect": true },
      { "text": "$T = 625$", "isCorrect": false },
      { "text": "$T = 52$", "isCorrect": false },
      { "text": "$T = 500$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 11,
    "question": "La suite $(V_n)$ est définie par $V_n = 7 \\times (\\frac{1}{2})^n$. Quelle est sa nature et sa raison $q$?",
    "answerOptions": [
      { "text": "Géométrique de raison $q = 1/2$", "isCorrect": true },
      { "text": "Arithmétique de raison $r = 1/2$", "isCorrect": false },
      { "text": "Géométrique de raison $q = 7$", "isCorrect": false },
      { "text": "Géométrique de raison $q = 2$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 12,
    "question": "Soit une suite géométrique de premier terme $U_0 = 4$ et de raison $q = 3$. Calculez le terme $U_4$.",
    "answerOptions": [
      { "text": "$U_4 = 324$", "isCorrect": true },
      { "text": "$U_4 = 108$", "isCorrect": false },
      { "text": "$U_4 = 12$", "isCorrect": false },
      { "text": "$U_4 = 81$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 13,
    "question": "Une suite géométrique $(U_n)$ vérifie $U_2 = 12$ et $U_5 = 324$. Quelle est sa raison $q$?",
    "answerOptions": [
      { "text": "$q = 3$", "isCorrect": true },
      { "text": "$q = 9$", "isCorrect": false },
      { "text": "$q = 27$", "isCorrect": false },
      { "text": "$q = 1/3$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 14,
    "question": "Calculez la somme $S = 1 + 2 + 4 + 8 + \\dots + 256$.",
    "answerOptions": [
      { "text": "$S = 511$", "isCorrect": true },
      { "text": "$S = 512$", "isCorrect": false },
      { "text": "$S = 255$", "isCorrect": false },
      { "text": "$S = 257$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 15,
    "question": "Soit la suite $(U_n)$ définie par $U_n = 2n + 10$. À partir de quel rang $n$ a-t-on $U_n > 100$?",
    "answerOptions": [
      { "text": "$n = 46$", "isCorrect": true },
      { "text": "$n = 45$", "isCorrect": false },
      { "text": "$n = 50$", "isCorrect": false },
      { "text": "$n = 91$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 16,
    "question": "Quel est le résultat affiché par l'algorithme ci-dessous si la variable d'entrée $N=3$? (Algorithme: U = 5 ; Pour i allant de 1 à N : U = U + 2 ; Afficher U)",
    "answerOptions": [
      { "text": "$11$", "isCorrect": true },
      { "text": "$13$", "isCorrect": false },
      { "text": "$7$", "isCorrect": false },
      { "text": "$9$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 17,
    "question": "Quel rang $N$ est affiché par l'algorithme suivant si $U_0=1$ et $Seuil=30$? (Algorithme: U=1, N=0 ; Tant que U <= Seuil : U = U * 2 ; N = N + 1 ; Afficher N)",
    "answerOptions": [
      { "text": "$N = 5$", "isCorrect": true },
      { "text": "$N = 4$", "isCorrect": false },
      { "text": "$N = 30$", "isCorrect": false },
      { "text": "$N = 6$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 18,
    "question": "On place $C_0 = 1000$ euros à un taux d'intérêt simple de $5\\%$ par an. Soit $C_n$ le capital après $n$ années. Quelle est la nature de la suite $(C_n)$?",
    "answerOptions": [
      { "text": "Arithmétique de raison $r=50$", "isCorrect": true },
      { "text": "Géométrique de raison $q=1.05$", "isCorrect": false },
      { "text": "Arithmétique de raison $r=1050$", "isCorrect": false },
      { "text": "Géométrique de raison $q=0.05$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 19,
    "question": "On place $C_0 = 1000$ euros à un taux d'intérêt composé de $5\\%$ par an. Quel est le capital $C_3$ après 3 ans?",
    "answerOptions": [
      { "text": "$1157.63 \\text{ euros}$", "isCorrect": true },
      { "text": "$1150 \\text{ euros}$", "isCorrect": false },
      { "text": "$1100 \\text{ euros}$", "isCorrect": false },
      { "text": "$1050 \\text{ euros}$", "isCorrect": false }
    ]
  },
  {
    "questionNumber": 20,
    "question": "Dans le vocabulaire des suites, que signifie l'expression 'suite alternée'?",
    "answerOptions": [
      { "text": "Une suite dont les termes changent de signe (positif, négatif, positif, négatif...).", "isCorrect": true },
      { "text": "Une suite dont le sens de variation change à chaque terme (croissante, décroissante, croissante...).", "isCorrect": false },
      { "text": "Une suite dont la forme explicite alterne entre deux formules différentes.", "isCorrect": false },
      { "text": "Une suite qui n'admet pas de limite.", "isCorrect": false }
    ]
  }
];