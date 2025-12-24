# Ochrid Gallery

This is the internal application of the public web store "Ochrid Gallery". This is the closed-off app that only selected employees of the business have access to. It is an SPA powered by React, providing user with fast navigation and dynamic content updates. The app's data is stored in the Supabase database, which also handles user authentication and authorization.

<br />

## Login screen

Firstly, only approved users can log in. Existing users are the only ones who can create new user accounts. When a new user wants to gain access to the website, they use a password provided by an existing user and, after they verify their e-mail address, they can log in.

![login screen](https://danijelmaksic.vercel.app/assets/cms-login-Dp2ucwYG.webp)

<br />

## Dashboard

After logging in, user will see the dashboard page, which contains all the relevant information and statistics about the business. Here user can also access the incoming orders in the Today section.

![dashboard](https://danijelmaksic.vercel.app/assets/cms-1-BRmwi_j9.webp)

<br />

## Inventory management

The first major part of the application is the inventory management. On this page user can add a new icon to the inventory.

![add new item screen](https://danijelmaksic.vercel.app/assets/cms-2-BDE-P3jl.webp)

<br />

On the Icons page we can find the main part of the inventory system, where icons can be browsed, edited or deleted. Any changes here will affect what the public e-commerce website displays.

![inventory table](https://danijelmaksic.vercel.app/assets/cms-3-FRhwbmzJ.webp)

<br />

Each icon has its own page with some relevant information about it.

![item page](https://danijelmaksic.vercel.app/assets/cms-4-BT8Ue4Pg.webp)

<br />

## Order management

Here comes the second major part of the app, the order management. Any incoming orders will be displayed here. Every order has its own Order ID, which can be used for keeping track of it.

![orders table](https://danijelmaksic.vercel.app/assets/cms-5-DPo2eBnb.webp)

<br />

In the details page of the specific order, all the information about said order will be displayed in an easy-to-read manner. On this page user can choose to archive (confirm and complete) the order. Archiving the order will update the inventory and dashboard stats.

![order page](https://danijelmaksic.vercel.app/assets/cms-6-nIzbph4e.webp)

<br />

Archive is the other side of the order management system, where users can browse past (completed) orders if there is a need for it. Dashboard uses these orders to display the statistics about individual and total sales.

![archive page](https://danijelmaksic.vercel.app/assets/cms-7-5KHGzbXL.webp)

<br />

This is the archived order page, which lists the details of a specific past order. Deleting an archived order will update the statistics in the dashboard.

![archived order page](https://danijelmaksic.vercel.app/assets/cms-8-Dtb_irgf.webp)

<br />

## User settings

In the end we have the "Users" page, where new users can be added or existing ones be updated.

![users page](https://danijelmaksic.vercel.app/assets/cms-9-D6lNXBeb.webp)

<br />

The final page is the update account page, where user can edit account information or password.

![update account page](https://danijelmaksic.vercel.app/assets/cms-10-BTxgidXk.webp)
<br />

## Credits

Special thanks to Jonas Schmedtmann, thanks to whom I learned a lot; his work was an inspiration for most of my projects. If you are new at learning web development check out his courses!

