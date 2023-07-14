# OktaWithAngularPkceFlow

# Step 1
Visit the website https://developer.okta.com/login/ to register your account using your business email or company email address.

# Step 2
 Your screen will appear like this
 
![okta-dashboard](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/614705b0-527a-4b5c-b0b0-1b0f657f5fb7)
# Step 3
To expand the Applications menu, select the Application submenu, and then click on "Create App Integration." and chose the OIDC - OpenID Connect and application type single page application.

![okta-step-3](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/728367db-382d-422b-ae9b-71f2a0a8ca41)

![okta-step-3 1](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/7cb22100-543e-4bc3-9f94-d853450b2d49)

# Step 4 
 fill in the application name, redirect URL, and other fields based on the image provided below
 
Please![step-4](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/08e45688-e8d1-4442-a6b7-d288ededa934)

# Step 5
 preview the details and copy the client id.
 ![step-5-preview](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/d3d3b203-77d7-488d-a212-49fe085e5852)


## Angular Step.

Clone the project git clone https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow and change the envoirment varible  clientId, loginUrl, tokenUrl and callbackUrl as ber your configuration


 1] `npm install` 

 2] `npm ng s` 

## PKCE FLOW
![code-flow](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/ac29b886-f576-4f4e-a578-0d9a8a368422)

When we enter the localhost:4200 it will redirect to okta
 ![login-page](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/ccd3d00f-b4c4-456b-9f22-7444f3f14b60)
![token](https://github.com/Nasruddinkhan/okta-with-angular-pkce-flow/assets/35895259/d2ae0dfe-31e7-46e6-b672-baf1ccaf5655)

