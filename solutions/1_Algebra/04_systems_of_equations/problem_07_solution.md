# Exercise 7 - Choosing a Method Deliberately

## Problem Statement

Do not solve all of the following systems completely. For each situation, choose the method that best uses its structure and justify your choice:

1. one system with a triangular coefficient matrix
   ```math
\begin{cases}2x-y=3,\\4y=8;\end{cases}
```
2. three systems $Ax=b_i$ with the same invertible matrix $A$, when $A^{-1}$ is already known;
3. one $3\times3$ system for which the inverse matrix is not given and the goal is only to find one solution vector.

For case 1, carry out the chosen method completely. For cases 2 and 3, describe the plan and indicate which part of the computation would be reusable or unnecessary. Do not judge a method by its name alone — refer to the number of right-hand sides and the structure of the matrix.

## Theoretical Background and Concepts

Choose a method based on structure and how many right-hand sides there are, not only the method's name.

## Step-by-Step Solution

**1.** The system is triangular. From $4y=8$, $y=2$; then $2x-2=3$ gives $x=5/2$. Back-substitution is easiest.

**2.** If $A^{-1}$ is already known, use $x_i=A^{-1}b_i$ for each of the three systems, reusing the inverse.

**3.** For one general $3\times3$ system with unknown inverse, use Gaussian elimination directly, avoiding a separate inverse calculation.

## Verification and Consistency Checks

Case 1 check: $2(5/2)-2=3$ and $4(2)=8$. The plans for cases 2 and 3 avoid unnecessary repeated computation.
