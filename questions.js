const questions = [
    {
      "questionNumber": 1,
      "question": "Développez l'expression suivante en utilisant l'identité remarquable appropriée : $$\\left(2x - \\frac{1}{2}\\right)^2$$",
      "answerOptions": [
        { "text": "$4x^2 - 2x + \\frac{1}{4}$", "isCorrect": true },
        { "text": "$4x^2 - 4x + \\frac{1}{4}$", "isCorrect": false },
        { "text": "$2x^2 - 2x + \\frac{1}{4}$", "isCorrect": false },
        { "text": "$4x^2 + 2x + \\frac{1}{4}$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 2,
      "question": "Factorisez l'expression $9x^2 - 49$ sous la forme factorisée.",
      "answerOptions": [
        { "text": "$3(x - 7)(x + 7)$", "isCorrect": false },
        { "text": "$(3x - 7)^2$", "isCorrect": false },
        { "text": "$(3x - 7)(3x + 7)$", "isCorrect": true },
        { "text": "$9(x - 7)(x + 7)$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 3,
      "question": "Quelle est la forme canonique de la fonction $f(x) = x^2 - 6x + 5$?",
      "answerOptions": [
        { "text": "$(x - 3)^2 + 4$", "isCorrect": false },
        { "text": "$(x + 3)^2 - 4$", "isCorrect": false },
        { "text": "$(x - 3)^2 - 4$", "isCorrect": true },
        { "text": "$(x - 6)^2 + 5$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 4,
      "question": "Développez la forme canonique $f(x) = -2(x + 1)^2 + 3$ pour obtenir la forme développée.",
      "answerOptions": [
        { "text": "$-2x^2 + 4x + 1$", "isCorrect": false },
        { "text": "$-2x^2 - 4x + 1$", "isCorrect": true },
        { "text": "$-2x^2 + 5$", "isCorrect": false },
        { "text": "$2x^2 + 4x + 5$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 5,
      "question": "Calculez le discriminant $\\Delta$ de l'équation $3x^2 - 5x + 2 = 0$.",
      "answerOptions": [
        { "text": "$1$", "isCorrect": true },
        { "text": "$49$", "isCorrect": false },
        { "text": "$-1$", "isCorrect": false },
        { "text": "$13$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 6,
      "question": "Combien de solutions réelles l'équation $-x^2 + 4x - 4 = 0$ possède-t-elle?",
      "answerOptions": [
        { "text": "$0$", "isCorrect": false },
        { "text": "$1$", "isCorrect": true },
        { "text": "$2$", "isCorrect": false },
        { "text": "Impossible à déterminer", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 7,
      "question": "Quelles sont les solutions réelles de l'équation $2x^2 - x - 3 = 0$?",
      "answerOptions": [
        { "text": "$x_1 = 1$ et $x_2 = -3/2$", "isCorrect": false },
        { "text": "$x_1 = -1$ et $x_2 = 3/2$", "isCorrect": true },
        { "text": "$x_1 = -3$ et $x_2 = 1/2$", "isCorrect": false },
        { "text": "$x_1 = -1/2$ et $x_2 = 3$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 8,
      "question": "Trouvez une racine évidente de l'équation $5x^2 + 2x - 7 = 0$.",
      "answerOptions": [
        { "text": "$0$", "isCorrect": false },
        { "text": "$1$", "isCorrect": true },
        { "text": "$-1$", "isCorrect": false },
        { "text": "$2$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 9,
      "question": "Sachant que la fonction $f(x) = -3x^2 + 3x + 6$ a pour racines $x_1 = -1$ et $x_2 = 2$, quelle est sa forme factorisée?",
      "answerOptions": [
        { "text": "$(x - 1)(x + 2)$", "isCorrect": false },
        { "text": "$3(x + 1)(x - 2)$", "isCorrect": false },
        { "text": "$-3(x + 1)(x - 2)$", "isCorrect": true },
        { "text": "$-3(x - 1)(x + 2)$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 10,
      "question": "Quelle est la solution de l'inéquation $x^2 > 16$?",
      "answerOptions": [
        { "text": "$x \\in ]4; +\\infty[$", "isCorrect": false },
        { "text": "$x \\in ]-4; 4[$", "isCorrect": false },
        { "text": "$x \\in ]-\\infty; -4[ \\cup ]4; +\\infty[$", "isCorrect": true },
        { "text": "$x \\in ]-\\infty; -4[ \\cap ]4; +\\infty[$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 11,
      "question": "Résolvez l'inéquation du second degré suivante : $x^2 - 5x + 6 \\le 0$.",
      "answerOptions": [
        { "text": "$x \\in [2; 3]$", "isCorrect": true },
        { "text": "$x \\in ]-\\infty; 2] \\cup [3; +\\infty[$", "isCorrect": false },
        { "text": "$x \\in ]-\\infty; 2[ \\cup ]3; +\\infty[$", "isCorrect": false },
        { "text": "$x \\in ]2; 3[$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 12,
      "question": "Quel est l'axe de symétrie de la parabole représentant la fonction $f(x) = -4x^2 + 16x - 1$?",
      "answerOptions": [
        { "text": "$x = -2$", "isCorrect": false },
        { "text": "$x = 4$", "isCorrect": false },
        { "text": "$x = 2$", "isCorrect": true },
        { "text": "$x = 8$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 13,
      "question": "La fonction $g(x) = 0.5x^2 - 3x + 1$ admet-elle un maximum ou un minimum? Quelle est sa valeur?",
      "answerOptions": [
        { "text": "Un Maximum de $1$", "isCorrect": false },
        { "text": "Un Minimum de $-3.5$", "isCorrect": true },
        { "text": "Un Minimum de $3$", "isCorrect": false },
        { "text": "Un Maximum de $-3.5$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 14,
      "question": "Quelle est la nature de la variation de la fonction $h(x) = -2x^2 - 8x + 5$?",
      "answerOptions": [
        { "text": "Croissante puis décroissante", "isCorrect": true },
        { "text": "Décroissante puis croissante", "isCorrect": false },
        { "text": "Toujours croissante", "isCorrect": false },
        { "text": "Toujours décroissante", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 15,
      "question": "L'aire d'un rectangle est donnée par l'expression $A(x) = x^2 - 10x + 21$. Pour quelle valeur de $x$ l'aire est-elle nulle?",
      "answerOptions": [
        { "text": "$x=10$ ou $x=21$", "isCorrect": false },
        { "text": "$x=10$", "isCorrect": false },
        { "text": "$x=3$ ou $x=7$", "isCorrect": true },
        { "text": "$x=3$ seulement", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 16,
      "question": "Le bénéfice $B(x)$ (en milliers d'euros) d'une entreprise est modélisé par $B(x) = -x^2 + 12x - 20$, où $x$ est la quantité produite (en tonnes). Quelle quantité $x$ maximise le bénéfice?",
      "answerOptions": [
        { "text": "$x = 12$ tonnes", "isCorrect": false },
        { "text": "$x = 6$ tonnes", "isCorrect": true },
        { "text": "$x = 4$ tonnes", "isCorrect": false },
        { "text": "$x = 16$ tonnes", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 17,
      "question": "Quel est le signe de l'expression $f(x) = x^2 + x + 1$ pour tout $x \\in \\mathbb{R}$?",
      "answerOptions": [
        { "text": "Négatif ($\\le 0$)", "isCorrect": false },
        { "text": "Positif ($> 0$)", "isCorrect": true },
        { "text": "Positif pour $x > 0$ et Négatif pour $x < 0$", "isCorrect": false },
        { "text": "Le signe varie selon $x$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 18,
      "question": "Pour quelle(s) valeur(s) de $x$ l'expression $E(x) = -9x^2 + 6x - 1$ est-elle positive ou nulle?",
      "answerOptions": [
        { "text": "Jamais", "isCorrect": false },
        { "text": "$x \\in ]-\\infty; 1/3[ \\cup ]1/3; +\\infty[$", "isCorrect": false },
        { "text": "$x \\in \\emptyset$", "isCorrect": false },
        { "text": "$x = 1/3$", "isCorrect": true }
      ]
    },
    {
      "questionNumber": 19,
      "question": "Trouvez le coefficient $a$ de la fonction $f(x) = a(x-\\alpha)^2 + \\beta$ dont le sommet est $S(2; -1)$ et qui passe par le point $P(0; 7)$.",
      "answerOptions": [
        { "text": "$a = 2$", "isCorrect": true },
        { "text": "$a = 4$", "isCorrect": false },
        { "text": "$a = -2$", "isCorrect": false },
        { "text": "$a = 8$", "isCorrect": false }
      ]
    },
    {
      "questionNumber": 20,
      "question": "Si le discriminant $\\Delta$ d'une équation du second degré est strictement positif ($\\Delta > 0$), alors la parabole associée est nécessairement tournée vers le haut ($a > 0$). (Vrai ou Faux)",
      "answerOptions": [
        { "text": "Vrai", "isCorrect": false },
        { "text": "Faux", "isCorrect": true }
      ]
    }
];
