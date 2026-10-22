# Exercise 3 - When Can Matrices Be Multiplied?

## Problem Statement

The matrix sizes are
```math
A_{2\times3},\qquad B_{3\times4},\qquad C_{4\times2},\qquad D_{2\times2}.
```
For the products
```math
AB,\ BA,\ BC,\ CB,\ AC,\ CA,\ AD,\ DA
```
determine whether they are defined. If so, state the size of the result. Justify each decision using the dimension compatibility condition.

## Theoretical Background and Concepts

A product $XY$ is defined when the number of columns of $X$ equals the number of rows of $Y$. The answer has the outer dimensions.

## Step-by-Step Solution

Using columns of the first matrix and rows of the second:

```math
AB: (2\times3)(3\times4)\to 2\times4,\quad BA:\ \text{not defined }(4\ne2)
```

```math
BC: (3\times4)(4\times2)\to3\times2,\quad CB:\ \text{not defined }(2\ne3)
```

```math
AC:\ \text{not defined }(3\ne4),\quad CA:(4\times2)(2\times3)\to4\times3
```

```math
AD:\ \text{not defined }(3\ne2),\quad DA:(2\times2)(2\times3)\to2\times3
```

## Verification and Consistency Checks

For example, $AB$ has 3 columns in $A$ and 3 rows in $B$, so it works. For $BA$, 4 columns do not match 2 rows.
