# Exercise 5 - Row Echelon Form and Number of Solutions

## Problem Statement

For the augmented matrix
```math
\left[\begin{array}{ccc|c}1&2&-1&3\\0&1&2&1\\0&0&0&0\end{array}\right]
```
determine the number of solutions and write them in parametric form. Explain how you know how many variables may be chosen freely.

## Theoretical Background and Concepts

A zero row means one equation supplies no new restriction. Three variables with two pivots leave one free variable.

## Step-by-Step Solution

The two nonzero rows give $y+2z=1$ and $x+2y-z=3$. Let $z=t$, then $y=1-2t$ and $x=1+5t$.

```math
(x,y,z)=(1+5t,1-2t,t),\quad t\in\mathbb R.
```

## Verification and Consistency Checks

Substituting gives $1+5t+2(1-2t)-t=3$ and $(1-2t)+2t=1$.
