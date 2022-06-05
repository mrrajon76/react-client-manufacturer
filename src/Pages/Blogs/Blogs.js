import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header />

            <div className='my-16 mx-6 md:mx-12 lg:mx-20 space-y-10'>
                <div className='p-6 shadow-lg shadow-gray-300 rounded'>
                    <h3 className='text-3xl text-primary font-bold'>How will you improve the performance of a React Application?</h3>
                    <p className='mt-6'>
                        React is one of the best front-end technology in terms of rendering performance. But as its virtual DOM is famous
                        for effectively rendering components, it’s still possible to run into performance issues in medium to large web
                        applications.
                        <br /><br />
                        In React, we can solve more than half of the performance issues by analyzing how our components interacted in our
                        app by using amazing tools such as React dev tools. Prioritizing the resources which are needed to be loaded first
                        and lazy-load the rest of the code or resources with techniques such as code-splitting will be an advantage.
                        There might be higher chances when we are duplicating things more unnecessarily or unintentionally. So we need to
                        keep in mind this also. Another way of optimizing a React app is by making sure we bundle our app for production
                        before deploying. By default, our app is in development mode, which means React will include helpful warnings.
                        It can make our app size large and responses slower than usual. So we need to make sure to bundle our app for
                        production before deploying.
                    </p>
                </div>

                <div className='p-6 shadow-lg shadow-gray-300 rounded'>
                    <h3 className='text-3xl text-primary font-bold'>What are the different ways to manage a state in a React application?</h3>
                    <p className='mt-6'>
                        React functional components can store information even after execution. When we need to store or "remember" something,
                        or to act in a different way depending on the environment, State is what we need to make it work this way.
                        <br /><br />
                        In order to implement state in our components, React provides us with a few hooks called useState, useEffect, useReducer.
                        There are also many ways to manage this state. Except React hooks, a lot of good tools have come up offering nice ways to
                        deal with state management like Redux, Recoil, Jotai, Zustand. For basic types of applications, React hooks are enough to
                        manage states but specially in really big, complex, and heavily-used apps, Redux is the most mature and used library.
                    </p>
                </div>

                <div className='p-6 shadow-lg shadow-gray-300 rounded'>
                    <h3 className='text-3xl text-primary font-bold'>How does prototypical inheritance work?</h3>
                    <p className='mt-6'>
                        Prototypical inheritance refers to the ability to access object properties from another object. It allows us to
                        reuse the properties or methods from one object to another through a reference pointer function. JavaScript is a prototype-based, Object-Oriented programming language. After the ES6 updates, JavaScript allowed
                        for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                    </p>
                </div>

                <div className='p-6 shadow-lg shadow-gray-300 rounded'>
                    <h3 className='text-3xl text-primary font-bold'>Why you do not set the state directly in React?</h3>
                    <p className='mt-6'>
                        If we update it directly, calling the setState() afterward may just replace the update we made. When we directly
                        update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and
                        accessing it after calling this method will only return the present value. We will also lose control of the state
                        across all components. Mutating state directly can lead to odd bugs, and components that are hard to optimize.
                    </p>
                </div>

                <div className='p-6 shadow-lg shadow-gray-300 rounded'>
                    <h3 className='text-3xl text-primary font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                    <p className='mt-6'>
                        First of all, we need an input field to get the search keyword. Then we need to run an array filter functionality on
                        our product array to matching the product name with search keyword. The array filter function will return us a new
                        array of matched products. After that we can easily display that new array.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blogs;