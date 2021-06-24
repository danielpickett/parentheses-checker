# parentheses-checker

Serving live at https://danielpickett.github.io/parentheses-checker/

This is a validator for checking that parentheses are balanced in a string of code. It's mostly written for LISP (a language I do not know). LISP is famous for all its parentheses, but I also made it so it can handle square and curly braces because, why not?

Some features include: 
- It will ignore LISP comments (lines starting with ';')
- It will ignore brackets in LISP string literals (double quotes only), accounting for escaped double quote characters
