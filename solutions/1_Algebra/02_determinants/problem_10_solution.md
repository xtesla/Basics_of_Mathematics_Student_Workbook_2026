# Exercise 10 - Detecting Dependence

## Problem Statement

Without carrying out a full determinant calculation, explain why
```math
\det\begin{pmatrix}1&2&3\\2&4&6\\0&1&5\end{pmatrix}=0.
```
Identify a specific dependence between the rows and connect it with noninvertibility of the matrix.

## Theoretical Background and Concepts

If two rows are proportional, they are linearly dependent and the determinant is zero.

## Step-by-Step Solution

Row 2 is twice row 1: $(2,4,6)=2(1,2,3)$. Subtracting twice row 1 from row 2 produces a zero row.

Therefore $\det A=0$ and $A$ is not invertible.

## Verification and Consistency Checks

A matrix with a zero row has determinant zero, confirming the dependence argument.
