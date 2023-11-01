# React + Vite
# Question 1. Add at least three Project Features

## Ans : Three Features Are

* By clicking the Select button you can add the course into the cart.
* Also you can see the total price on the total price field by clicking the same  button.
* You can not add more then 20 credit hours..But if you try to add then a alert will be displayed.

## Question 2. Discuss how you managed the state in your assignment project

# Ans : Here i discussed about how i managed the states of this project

* At first I have declared a state inside Card component to stored and load the whole data on the UI by using useEffect.

* Then I find out that i have to add specific data into the cart..But the Cart and Card are two different components but they both are called in the App.jsx Component.

* So that if i have to share data from Card to Cart then the common place or you can say the parent div fir both of them and (we already know that react is unidirectional data flow framework means we can not pass data from children to parents but can pass data from parents to children) is App component so that i declared the cartData state inside App component and thats why i can easily pass the stored data into the Cart component by using the Cart component that is already called inside the App component .

* And the rest of the states i declared inside the App component because of the same reason. Cause i have to get the data from Card component to Cart component and the App component is the parent component of both Card and Cart component thats why i declared all the states there and share the data by passing it through child components...

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
