# Getting Started with "PC Components"

## First of all, let's check out the Live site [PC Components](https://manufacturer-client-a8599.web.app/).

### Some core functionality of PC Components

PC Components is a manufacturer company website. It has few special functionality...

- The products will be in a descending order based on added time. So the customer will see the lates products first.
- For purchasing any products, customer needs to register/login. After register, they will be redirected to login page because customer will receive an email with verification link to verify them first.
- Used firebase authentication system (email password, google, github). Used environment variable to protect firebase auth keys
- An Admin can't purchase any product
- On footer, there will be 4 most selling product links which will redirect customer to the payment page
- On purchase page, customer will see the product details, his/her info(name, phone, address). The default purchase quantity will be the product 'minimum order quantity' value. Customer can't decrease the value but can increase the value maximum to the available stock. After placing the order, it will be in the order collection database with 'pending' order status and 'unpaid' payment status
- For payment, customer needs to pay through card payments. In this site, used Stripe payment system
- If the customer don't pay then they can also pay late from their dashboard -> my orders page
- For all the registered user, there is a dashboard link which will open the profile page first. From the profile page, users can update their info except user name & user email. They can update image, phone, address, postal, linkedin ID
- If user don't set any user image then a default avatar image will appear
- From dashboard, a customer user can see his/her orders with order details. If the payment status is unpaid then there will be a button to pay. A customer can cancel his/her order only when the payment status is unpaid
- Initially the order status will be Pending, after successful payment the status will be changed to Processing
- From dashboard a customer can add a review by providing a review text, a rating (between 0 to 5 any number with fraction)
- An Admin will see manage orders, manage products, add new product, make a user Admin. Customer can't access this pages
- On manage all orders, Admin can delete only the unpaid orders. Admin can change the order status if only it's a paid order. Paid order's default status will be 'processing' but admin can set the status 'pending/processing/shipped. After updating the status it will be appeared on customer dashboard -> my orders also
- If Admin/Customer delete any order, the purchased amount will be adjusted again with the product current available stock
- If the product payment status is 'paid' then the customer/admin can see the transaction ID
- Admin can add a new product which will be appeared first in the list
- Admin can add new stock quantity of an product or delete the product with a nice confirmation window
- Admin can see all the users and can make any user an admin
- For all kind of confirmation, notification used Sweet-Alert
- Used React Query for making all data fetching fast
- Used React hook form for adding new product, review, purchase page

### Some Hot technologies used in this project

- React App
- React Router
- React Icons
- React Query
- React Hook Forms
- React Firebase Hook
- React Stripe
- React Ratings
- React Sweet Alert
- React Taostify
- Tailwind CSS, Daisy UI elements
