# Exercise 12 - Formula for a Matrix Power

## Problem Statement

Let
```math
A=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
```
Compute $A^2$, $A^3$, and $A^4$, and use them to formulate a conjecture for $A^n$. Then do not stop after checking one more case: assume the formula is true for $n$, multiply by $A$, and explain why you obtain exactly the formula for $n+1$.

## Theoretical Background and Concepts

For a power $A^n$, multiply by $A$ repeatedly. A pattern should be proved, not only guessed from examples.

## Step-by-Step Solution

```math
A^2=\begin{pmatrix}1&2\\0&1\end{pmatrix},\quad A^3=\begin{pmatrix}1&3\\0&1\end{pmatrix},\quad A^4=\begin{pmatrix}1&4\\0&1\end{pmatrix}.
```

This suggests $A^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}$. Assume it holds for $n$. Then

```math
A^{n+1}=A^nA=\begin{pmatrix}1&n\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}1&n+1\\0&1\end{pmatrix}.
```

It is true for $n=1$, and the step proves it for every positive integer $n$.

Here are the products that give the first few powers:

```math
A^2=\begin{pmatrix}1(1)+1(0)&1(1)+1(1)\\0(1)+1(0)&0(1)+1(1)\end{pmatrix}=\begin{pmatrix}1&2\\0&1\end{pmatrix}.
```

```math
A^3=A^2A=\begin{pmatrix}1&1(1)+2(1)\\0&1\end{pmatrix}=\begin{pmatrix}1&3\\0&1\end{pmatrix},
\quad A^4=A^3A=\begin{pmatrix}1&1(1)+3(1)\\0&1\end{pmatrix}=\begin{pmatrix}1&4\\0&1\end{pmatrix}.
```

For induction, assuming $A^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}$, the next product has entries $1\cdot1+n\cdot0=1$, $1\cdot1+n\cdot1=n+1$, $0\cdot1+1\cdot0=0$ and $0\cdot1+1\cdot1=1$. Hence the stated formula also holds at $n+1$.

## Verification and Consistency Checks

The formula gives the already computed matrices when $n=2,3,4$.
