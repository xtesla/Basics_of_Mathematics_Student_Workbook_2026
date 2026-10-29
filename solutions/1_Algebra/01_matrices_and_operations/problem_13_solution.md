# Exercise 13 - A Recurrence Written in Matrix Form

## Problem Statement

Let
```math
F=\begin{pmatrix}1&1\\1&0\end{pmatrix}.
```
Compute $F^2$, $F^3$, $F^4$, and $F^5$. Compare the numbers obtained with the sequence
```math
0,1,1,2,3,5,8,\ldots
```
and describe the relationship you observe. Then compute
```math
F\begin{pmatrix}a\\b\end{pmatrix}
```
and explain how this multiplication performs one recurrence step: it creates the sum of two consecutive terms and keeps one of them for the next step.

## Theoretical Background and Concepts

Matrix powers of $F$ contain consecutive Fibonacci numbers. Matrix-vector multiplication can update two neighboring terms at once.

## Step-by-Step Solution

```math
F^2=\begin{pmatrix}2&1\\1&1\end{pmatrix},\quad F^3=\begin{pmatrix}3&2\\2&1\end{pmatrix}.
```

```math
F^4=\begin{pmatrix}5&3\\3&2\end{pmatrix},\quad F^5=\begin{pmatrix}8&5\\5&3\end{pmatrix}.
```

The entries follow $0,1,1,2,3,5,8,\ldots$. Also

```math
F\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}a+b\\a\end{pmatrix}.
```

The new first entry is the sum, and the old first entry becomes the second.

I start by multiplying $F$ by itself:

```math
F^2=\begin{pmatrix}1(1)+1(1)&1(1)+1(0)\\1(1)+0(1)&1(1)+0(0)\end{pmatrix}=\begin{pmatrix}2&1\\1&1\end{pmatrix}.
```

Multiplying a row $(u,v)$ by $F$ gives $(u+v,u)$. Thus each row of $F^2$ changes in the same way to form $F^3$: $(2,1)\to(3,2)$ and $(1,1)\to(2,1)$. Repeating this produces $F^4$ and $F^5$.

For the column vector in the question:

```math
F\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}1a+1b\\1a+0b\end{pmatrix}=\begin{pmatrix}a+b\\a\end{pmatrix}.
```

So one step produces the next Fibonacci number and keeps the previous one.

## Verification and Consistency Checks

For $(a,b)=(3,2)$, the result is $(5,3)$, the next pair in the sequence.
