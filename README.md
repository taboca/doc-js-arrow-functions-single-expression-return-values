# Using single expressions as the return value in arrow functions in JavaScript

If you want to learn more about Arrow functions, please see [Arrow functions] in ES2015. This article shows examples using ES2015 and JSX to contrast the various ways to return values when using Arrow functions. 

## Single expressions after => will return the expression 

In the following example, the function foo have a block of JSX code being returned as the value of the function. The use of parenthesis refers to the grouping operator and is necessary in order to inform the Arrow function that the whole block is a single expression. 

```
const testFunction = () => (
    <span>
        <p>Hello world</p>
    </span>
);
```

A similar comparable case would be the following:

```
const test = () => (<span><p>Hello world</p></span>);
```

On the other hand, if curly braces are used, JavaScript will understand that as a statement:

```
const foo = (params) => {} // this is not an object being returned, it's just an empty statement 
```

Therefore, using statement is a good start to have code in it, multiple lines, and it will require the use of "return" if the function is intended to return value:

const foo = (params) => {
    let value = 1; 
    return value;
}

In case you want to return an empty object, the grouping operator can be used to enclose the curly braces: 

```
const foo = (params) => ({}) 
```

