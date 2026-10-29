# Exercise 7 - Identity Matrix, Zero Matrix, and Powers

## Problem Statement

For
```math
A=\begin{pmatrix}2&1\\0&2\end{pmatrix}
```
compute
```math
AI,\qquad IA,\qquad A+0,\qquad A^2,\qquad A^3.
```
Explain the roles of the matrices $I$ and $0$, and describe the pattern you observe in successive powers of $A$.

## Theoretical Background and Concepts

The identity matrix $I$ does not change a matrix under multiplication, and the zero matrix does not change it under addition. Powers mean repeated multiplication.

## Step-by-Step Solution

With $2\times2$ identity and zero matrices:

```math
AI=IA=A+0=\begin{pmatrix}2&1\\0&2\end{pmatrix}.
```

```math
A^2=\begin{pmatrix}4&4\\0&4\end{pmatrix},\qquad A^3=\begin{pmatrix}8&12\\0&8\end{pmatrix}.
```

The diagonal doubles each time; the upper-right entry is $n2^{n-1}$ in $A^n$.

To see where the powers come from, multiply row by column:

```math
A^2=\begin{pmatrix}
2(2)+1(0)&2(1)+1(2)\\
0(2)+2(0)&0(1)+2(2)
\end{pmatrix}=\begin{pmatrix}4&4\\0&4\end{pmatrix}.
```

Then multiply $A^2$ by $A$:

```math
A^3=\begin{pmatrix}
4(2)+4(0)&4(1)+4(2)\\
0(2)+4(0)&0(1)+4(2)
\end{pmatrix}=\begin{pmatrix}8&12\\0&8\end{pmatrix}.
```

Multiplication by $I$ and addition of $0$ do not change any entries.

## Verification and Consistency Checks

Multiply $A^2A$: its upper-right entry is $4(1)+4(2)=12$, matching $A^3$.
