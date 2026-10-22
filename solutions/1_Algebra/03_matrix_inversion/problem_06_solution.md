# Exercise 6 - Solving a System Using the Inverse

## Problem Statement

Solve
```math
Ax=b,
```
where
```math
A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\qquad b=\begin{pmatrix}5\\7\end{pmatrix},
```
using $x=A^{-1}b$. Then substitute the resulting vector back into the equation and check the result.

## Theoretical Background and Concepts

Solve $Ax=b$ by multiplying by $A^{-1}$: $x=A^{-1}b$.

## Step-by-Step Solution

$\det A=6-1=5$, hence

```math
A^{-1}=\frac15\begin{pmatrix}3&-1\\-1&2\end{pmatrix},\quad x=A^{-1}b=\frac15\begin{pmatrix}15-7\\-5+14\end{pmatrix}=\begin{pmatrix}8/5\\9/5\end{pmatrix}.
```

## Verification and Consistency Checks

Check: $2(8/5)+9/5=5$ and $8/5+3(9/5)=7$.
