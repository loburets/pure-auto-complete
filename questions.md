# Test questions

Note: no resources used to answer, everything just from memory. 

Also, **no** grammarly, google translator, etc was used. Just pure typing in my IDE. 

Spent time: **40 minutes**.

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

```javascript
<parent>
    Inside the child we have: {this.state.childValue}
    <child onChange={childValue => this.setState({childValue})}/>
</parent>
```

```javascript
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

For async...await:

```javascript
someMethod = async _ => {
    try {
        await something()
    } catch (e) {
        processError(e)
    }
}
```

For promises:

```javascript
doSomething()
    .then(value => processValue(value))
    .catch(e => processError(e))
```

For callbacks is something like either try catch or separate callback for errors

### 8. How many arguments does setState take and why is it async. 

setState takes one argument which is either object or callback. The callback is used when state should be updated based on previous state. 

It is asynchronous because react can accommodate few set updates to make only one render and safe performance. But not  sure how it works in details.

### 9. List the steps needed to migrate a Class to Function Component.

First of all, the react documentation says not to do it without a reason. But if we do:

1. Make functional component with the render which is very similar to class component
2. Get props not from this.props, but from the first function argument
3. For all the state variables use useState
4. For all the lifecycle method use hooks. Mostly they are just useEffect, but when I'm not sure I would just checked documentation

### 10. List a few ways styles can be used with components. 

#### styled-components

Can not make example as haven't used in practice

#### jss

```javascript
const styles = {
    root: {
        width: 30
    }
}

const component = ({classes}) => {
    return (
        <div className={classes.root}></div>
    )
}

export withStyles(styles)(component)
```

#### Just import them

```javascript
import "./App.css"

const component = ({classes}) => {
    return (
        <div className="some-classname-used-in-the-css-file"></div>
    )
}
```

### 11. How to render an HTML string coming from the server.

Don't remember exactly, should be something like `{!variableWithTheString!}`

If the value is retrieved from database then we need to ensure that the string is properly escaped from any potential js code on backed side before it was saved. Otherwise, we will get XSS attack (maybe some other name, I often confuse it with CSRF)
