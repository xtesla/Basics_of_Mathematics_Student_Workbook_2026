# Exercise 15 - Associativity of Multiplication and Different Calculation Paths

## Problem Statement

Given
```math
A=\begin{pmatrix}1&2&0\\0&1&1\end{pmatrix},\quad B=\begin{pmatrix}1&0\\2&1\\-1&3\end{pmatrix},\quad C=\begin{pmatrix}2&1\\0&-1\end{pmatrix}.
```
Compute $(AB)C$ and $A(BC)$. Compare the results and the number of intermediate operations. Explain what associativity of matrix multiplication means in this example.

## Theoretical Background and Concepts

Associativity means $(AB)C=A(BC)$ when the products are defined. It does not mean that we may switch the order of matrices.

## Step-by-Step Solution

First calculate

```math
AB=\begin{pmatrix}5&2\\1&4\end{pmatrix},\quad (AB)C=\begin{pmatrix}10&3\\2&-3\end{pmatrix}.
```

In the other order,

```math
BC=\begin{pmatrix}2&1\\4&1\\-2&-4\end{pmatrix},\quad A(BC)=\begin{pmatrix}10&3\\2&-3\end{pmatrix}.
```

Using the ordinary dot-product method, $AB$ takes 12 scalar multiplications and $(AB)C$ takes 8, total 20. $BC$ takes 12 and $A(BC)$ takes 12, total 24.

The row-by-column working for both routes is:

```math
AB=\begin{pmatrix}1(1)+2(2)+0(-1)&1(0)+2(1)+0(3)\\0(1)+1(2)+1(-1)&0(0)+1(1)+1(3)\end{pmatrix}=\begin{pmatrix}5&2\\1&4\end{pmatrix}.
```

```math
(AB)C=\begin{pmatrix}5(2)+2(0)&5(1)+2(-1)\\1(2)+4(0)&1(1)+4(-1)\end{pmatrix}=\begin{pmatrix}10&3\\2&-3\end{pmatrix}.
```

In the other grouping:

```math
BC=\begin{pmatrix}
1(2)+0(0)&1(1)+0(-1)\\
2(2)+1(0)&2(1)+1(-1)\\
-1(2)+3(0)&-1(1)+3(-1)
\end{pmatrix}=\begin{pmatrix}2&1\\4&1\\-2&-4\end{pmatrix}.
```

```math
A(BC)=\begin{pmatrix}
1(2)+2(4)+0(-2)&1(1)+2(1)+0(-4)\\
0(2)+1(4)+1(-2)&0(1)+1(1)+1(-4)
\end{pmatrix}=\begin{pmatrix}10&3\\2&-3\end{pmatrix}.
```

With the usual algorithm, multiplying an $m\times n$ matrix by an $n\times p$ matrix uses $mnp$ scalar multiplications. The first route uses $2\cdot3\cdot2+2\cdot2\cdot2=12+8=20$. The second uses $3\cdot2\cdot2+2\cdot3\cdot2=12+12=24$. We only change the grouping, not the factor order.

## Verification and Consistency Checks

Both calculation paths give the same matrix, confirming associativity. Computing $AB$ first uses fewer scalar multiplications here.
