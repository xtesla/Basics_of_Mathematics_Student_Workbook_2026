# Exercise 3 - Inconsistent System

## Problem Statement

Solve or show that the system is inconsistent:
```math
\begin{cases}x+2y=3,\\2x+4y=7.\end{cases}
```
Show how the contradiction appears in the matrix after elimination and interpret it in terms of equations.

## Theoretical Background and Concepts

A system is inconsistent if elimination produces an impossible equation, such as $0=1$.

## Step-by-Step Solution

Subtract twice the first equation from the second:

```math
\left[\begin{array}{cc|c}1&2&3\\2&4&7\end{array}\right]\to\left[\begin{array}{cc|c}1&2&3\\0&0&1\end{array}\right].
```

The second row means $0=1$, so there is no solution.

## Verification and Consistency Checks

The left sides of the equations are proportional, but 7 is not twice 3.
