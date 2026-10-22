# Exercise 3 - Swapping Two Rows

## Problem Statement

For
```math
A=\begin{pmatrix}1&2&0\\0&3&1\\2&1&1\end{pmatrix}
```
compute $\det A$. Then form a matrix $B$ by swapping the first and second rows of $A$.

First predict $\det B$ using a determinant property, and then verify your prediction by calculation.

## Theoretical Background and Concepts

Swapping two rows changes the sign of the determinant.

## Step-by-Step Solution

```math
\det A=1(3\cdot1-1\cdot1)-2(0\cdot1-1\cdot2)=2+4=6.
```

After swapping rows 1 and 2, $\det B$ should be $-6$.

```math
B=\begin{pmatrix}0&3&1\\1&2&0\\2&1&1\end{pmatrix},\qquad\det B=-3(1)+1(1-4)=-6.
```

## Verification and Consistency Checks

The direct calculation gives -6, exactly the negative of $\det A$.
