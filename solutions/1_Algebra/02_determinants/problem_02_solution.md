# Exercise 2 - Determinant of a 3×3 Matrix

## Problem Statement

For
```math
A=\begin{pmatrix}1&2&-1\\0&3&4\\2&1&5\end{pmatrix}
```
compute $\det A$ using Sarrus' rule. Then perform one simple check using a chosen property of the determinant.

## Theoretical Background and Concepts

Sarrus' rule adds the three downward diagonal products and subtracts the three upward ones.

## Step-by-Step Solution

```math
\det A=1(3\cdot5-4\cdot1)-2(0\cdot5-4\cdot2)+(-1)(0\cdot1-3\cdot2)=11+16+6=33.
```

## Verification and Consistency Checks

As a check, subtracting twice row 1 from row 3 does not change the determinant; expansion then still gives 33.
