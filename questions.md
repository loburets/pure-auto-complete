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

1. One of the props should be a callback which is called inside the child component, so in the pared component it will change the state of the component or whatever you need. 

For example:

```
<parent>
    Inside the child we have: {this.state.childValue}
    <child onChange={childValue => this.setState({childValue})}/>
</parent>
```

```
function child() {
    return (
        <input onChange={e => this.props.onChange(e.target.value)}/>
    )
}
```

2. Some state manager (redux) connected to the component, so some callback is passed as mapDispatchToProps. When it triggered, the event is dispatched, store is updated and subscribed components see the changes.

3. Don't know anything else (maybe again something about the Context?)

### 4. Give 2 ways to prevent components from re-rendering. 

1. shouldComponentUpdate for class components or memoization for functional components
2. extend PureComponent for class components

### 5. What is a fragment and why do we need it? Give an example where it might break my app. 

Fragment is a way to render react not only to the single `<div id="app"></div>` but somewhere else outside it. Can be used for some popups etc.

About the break, maybe it is z-index? If the root div `<div id="app"></div>` has less z-index then the popup, then whatever value we will apply to internal elements, they will be not above the sibling element. But it is more generally about z-index than about the react, so maybe some other answer is supposed here.

### 6. Give 3 examples of the HOC pattern. 

1. `connect(mapStateToProps, mapDispatchToProps)(component)` for redux
2. `withStyles(styles)(component)` for jss

### 7. What's the difference in handling exceptions in promises, callbacks and async...await. 
### 8. How many arguments does setState take and why is it async. 
### 9. List the steps needed to migrate a Class to Function Component. 
### 10. List a few ways styles can be used with components. 
### 11. How to render an HTML string coming from the server.
