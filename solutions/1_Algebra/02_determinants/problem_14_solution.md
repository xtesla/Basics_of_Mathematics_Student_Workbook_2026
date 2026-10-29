# Exercise 14 - A System of Equations and the Determinant

## Problem Statement

Consider the system $Ax=b$, where
```math
A=\begin{pmatrix}1&2\\k&4\end{pmatrix}.
```
For which values of $k$ does the system have exactly one solution for every $b$? For the remaining value, give an example of a right-hand side $b$ for which the system has infinitely many solutions, and an example for which it has no solution.

## Theoretical Background and Concepts

For $Ax=b$ there is exactly one solution for every $b$ if and only if $\det A\ne0$.

## Step-by-Step Solution

```math
\det A=4-2k.
```

For $k\ne2$ there is one solution for every $b$. At $k=2$, the second coefficient row is twice the first.

If $b=(1,2)^T$, the equations agree and there are infinitely many solutions. If $b=(1,3)^T$, they contradict and there is no solution.

For a $2\times2$ matrix, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$. Here:

```math
\det A=1\cdot4-2\cdot k=4-2k.
```

It is nonzero exactly when $k\ne2$, which gives a unique solution for every right-hand side.

## Verification and Consistency Checks

At $k=2$, $x+2y=1$ and $2x+4y=2$ coincide, while changing 2 to 3 makes them inconsistent.
