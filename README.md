1. Difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**

Ans: **getElementById** -- 'Id' is a unique thing. In case of HTML & CSS, we have seen that we can access only one element with a specific id. The concept of getElementByID in JS is very similar to that. we can access a single element with a specific-named id. For example,
if the HTML contains: <h2 id="title">Hello!</h2>
<button id="addBtn">Add Item</button>

and we use let title = document.getElementById("title") ; in JS and then observe the output with console.log('title'), we will see 'Hello!' in the output. if we wanna see the 'Add Item' text as output we have to use document.getElementById("addBtn"), store it in a variable and then console.

**getElementsByClassName** -- It picks HTML collection of all elements under the specific classname.

**querySelector & querySelectorAll**: While querySelector selects only the first element under the specified selector, querySelectorAll picks all the elements (nodelist of all elements) of the specified selector.

2. How do you **create and insert a new element into the DOM**?

Ans: Creating & inserting a new element inside DOM is simpler by following the 03 steps including Create, Find and Append.

Step 1: Create and set innerText or innerHTML
const newElement= document.createElement('li');
newElement.innerText = 'New Element';

Step 2: find where to insert
const existingElement = document.getElementById('existing-Element')

Step3: Append the new element
existingElement.append(newElement);

3. What is **Event Bubbling** and how does it work?

Ans: **Event Bubbling** is a event-triggering process in JS where the event starts with the specified element (child element) and then propagates through the parent elements.

The concept of **Event Bubbling** will be easier if we think about a water bubbles, that we used to make and play with in our childhood. The bubbles move towards upper direction.
Event Bubbling also acts in the same way. At first it acts on the specific element where EventListener or any action is called. Then moves to parent, grandparent and the ancestors.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is a process where we can add events to the parent instead of multiple child under that parent.

It is useful in case of dynamic websites because we don't have to concern about new child element that are added afterwards. The parent itself holds the action such as: click, dblclick so even if new elements are attached under that parent, they will follow the same instructions like other existing element. It ensures a cleaner code and less number of event listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: **preventDefault()** -- prevents the default action of browser. For example: we can block the link opening action or submitting form action in browser with the help of **preventDefault()**

**stopPropagation()** -- stopPropagation() is related with Event Bubbling. If we use stopPropagation() the event stops to move upward. It is like preventing further propagation of the events.
