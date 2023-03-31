## **Como será o APP ?**
O objetivo principal do aplicativo é entregar o cálculo de Metabolismo Basal
- Quantas calorias a pessoa queima por dia.

Também fazer a divisão dos Macro-Nutrientes
- Gordura
- Proteina
- Carboidrato

## **Quais os calculos ?**
- Base IMC para verificar se está acima do peso ou não.
- Calculo de Metabolist Basal
- Calculo de Macro-Nutrientes dentro das calorias diárias do indivíduo.

## **Qual será os dados a serem calculados ?**
- Peso;
- Altura;
- Objetivo;
- Atividade;
- Idade;
- Sexo;
- Calculo Personalizado ou não
    - Divisão das porcentágens de macronutrientes ( para pessoas com experiência em dietas. )

## **Quais as opções poderemos aplicar para atingir os seguintes objetivos :**

- Ganho de Massa;
- Perda de Peso;
- Manter Peso;

## **Como é feito o cálculo de Metabolismo Basal**

1. Será necessário pegar os seguintes dados
- Peso em Kg
- Altura em cm
- Idade em anos
- Taxa de Atividade

| Atividade | Desc                                                  | Fator |
|:---------:|:------------------------------------------------------|:-----:|
| Sedentário| Pouco ou nenhum exercício.                            | 1.2   |
| Leve      | Exercício leve 1 a 3 dias por semana.                 | 1.375 |
| Moderado  | Faz esportes 3 a 5 dias por semana.                   | 1.55  |
| Alto      | Exercício Pesado de 5 a 6 dias por semana.            | 1.725 |
| Extremo   | Exercício Pesado diariamente e até 2 vezes por dia.   | 1.9   |

 <!-- : Sedentários (pouco ou nenhum exercício) fator = 1.2
 : Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
 : Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
 : Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
 : Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9 -->
2. Aplicar a seguinte fórmula
> Taxa de Atividade x ( 66 + (13,8 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos) Para as mulheres = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos) )
```
// Mulheres
taxaDeAtividade * (655 + ( 9,6 * peso) + (1,8 * altura) - (4,7 * idade))
// Homens
taxaDeAtividade * (66 + ( 12,8 * peso) + ( 5 x altura) - ( 6,8 * idade))
```

## **Como é feito o cálculo de IMC**

1. Será necessário pegar os seguintes dados
- Peso;
- Altura;

2. Será feito o seguinte cálculo
```
Peso / ( Altura * Altura )
```

3. O resultado será baseado na seguinte tabela

| IMC               | Classificação   | Grau de Obesidade |
|:------------------|:----------------|:-----------------:|
| Menor que 18,5    | Magreza         | O                 |
| Entre 18,5 e 24,9 | Normal          | O                 |
| Entre 25,0 e 29,9 | Sobrepeso       | I                 |
| Entre 30,0 e 39,9 | Obesidade       | II                |
| Maior que 40      | Obesidade Grave | III               |

## *Como é feito o cálculo de macro nutrientes*

1. Precisamos primeiro pegar o resultado do cálculo de Metabolismo Basal que será as calorias gástas diárias.

**Iremos entender como converter as calórias para os mácros.**

- Cada macro possui uma quantidade de caloria em sua unidade
    - 1g de Proteína = 4kcal
    - 1g de Carboidrato = 4kcal
    - 1g de Gordura = 9kcal

**Também será necessário dividir as calorias para os equivalente de % de macros.**

Exemplo
> 25% Proteinas, 25% Carboidratos, 50% Gorduras

Tendo os valores, iremos calcular a divisão para cada macro

```
let [carboidrato, proteina, gordura]

carboidrato = porcentagemCarboidrado * caloriasTotais
proteina = porcentagemProteina * caloriasTotais
gordura = procentagemGordura * caloriasTotais
```