# Exercise 10 - Columns of a Matrix Product

## Problem Statement

Given
```math
A=\begin{pmatrix}1&2&0\\0&1&1\end{pmatrix},\qquad B=\begin{pmatrix}1&2\\-1&0\\3&1\end{pmatrix}.
```
Denote the columns of $B$ by $b_1,b_2$.

1. Compute $Ab_1$ and $Ab_2$.
2. Compute the matrix $AB$.
3. Compare the results and explain why the columns of $AB$ are exactly the vectors $Ab_1$ and $Ab_2$.

## Theoretical Background and Concepts

Each column of $AB$ is $A$ multiplied by the matching column of $B$. This follows from the row-by-column multiplication rule.

## Step-by-Step Solution

The columns of $B$ are $b_1=(1,-1,3)^T$ and $b_2=(2,0,1)^T$.

```math
Ab_1=\begin{pmatrix}1-2+0\\0-1+3\end{pmatrix}=\begin{pmatrix}-1\\2\end{pmatrix},\qquad Ab_2=\begin{pmatrix}2\\1\end{pmatrix}.
```

So

```math
AB=\begin{pmatrix}-1&2\\2&1\end{pmatrix}.
```

Here is the second column calculation in full:

```math
Ab_2=\begin{pmatrix}1(2)+2(0)+0(1)\\0(2)+1(0)+1(1)\end{pmatrix}=\begin{pmatrix}2\\1\end{pmatrix}.
```

In general, $(AB)_{ij}$ means row $i$ of $A$ dotted with column $j$ of $B$. That is also entry $i$ of $Ab_j$, so the $j$-th column of $AB$ must equal $Ab_j$.

## Verification and Consistency Checks

The first column of $AB$ is $Ab_1$, and the second is $Ab_2$, exactly as expected.
