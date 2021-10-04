# Test questions

Note: no resources used to answer, everything just from memory. 

Also, no grammarly, google translator, etc was used. Just pure typing in my IDE. 

Spent time: x mins.

## Answers

### 1. What is the difference between Component and PureComponent? give an example where it might break my app. 

The difference is how React is going to rerender the component. For the usual Component it run the render method on each rerender of parent component, but for the PureComponent react will compare previous and next props of the current one and skip the render if nothing changed. 

Note: as far as remember it is used something like "shallow" comparison, so if you pass objects as props, only the fist level of nesting will be compared. But I don't remember this part much in details

So, it can break something if:

1. By some reason you need to rerender the component even if the props haven't changed
2. You pass objects with some nesting level as props, so component will be rerendered on each render cycle. It will create some load you haven't expected

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that? 

Maybe something that component should listen for the Context updates to reflect last changes, but per some conditions from ShouldComponentUpdate the rerender was ignored. 

But haven't used the Context on practice, so don't have the details fresh in my mind

### 3. Describe 3 ways to pass information from a component to its PARENT. 
### 4. Give 2 ways to prevent components from re-rendering. 
### 5. What is a fragment and why do we need it? Give an example where it
might break my app. 
### 6. Give 3 examples of the HOC pattern. 
### 7. What's the difference in handling exceptions in promises, callbacks and
async...await. 
### 8. How many arguments does setState take and why is it async. 
### 9. List the steps needed to migrate a Class to Function Component. 
### 10. List a few ways styles can be used with components. 
### 11. How to render an HTML string coming from the server.
