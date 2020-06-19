# NutriApp  :green_salad:   
In this application you can enter any recipe and get the nutritional value of it. It also showcase REST and public API handling. 
The app has been build using MEAN stack. I've also covered basic vulnerabilities by applied some security techniques such as 
validation, sanitazion and authentication. 
## Technologies and techniques used for this project
* **HTML 5**


* **CSS**
   * **Bootstrap** xname allowed for a responsive website across plataform and also provided a constant look throughout the application.
   
   
* **MongoDB:** I have used mongo to create the schemas which hold user information such as registration/login and other.
   * **Mongoose ODM** Library which falicitates the use of mongo.
   
   * Schema creation and handling of data.
   
   
* **Node.js / Express:** Node.Js and the Express library provide all we need to create, run and test our back-end server. 
Runs in port 3000
   * **REST-API** has been applies for user registration, login, validation and other data handling.
   
   * **Public API** from EDAMAM, it uses a JSON object with recipe information sent as a post request, it used AI to read the recipe and returns it's nutritional value.
   
   * **Passport** allows for Jason Web Token generation and authentication.
   
   * **ByCrypt** allows to encript and salt information at rest.
   
   * **CORS** allows for cummunication with front and back end when runnig in different ports.


* **Angular 2:** This project uses Angular as the fron-end framework, It provide an easy to use enviroment for component creation and build using Angular-CLI
   * **JWT** for token Authentication and validation.
   * **Routes** allow for a instant browsing without reloads.
   * **HTTP Modules** handle our HttP requests to the server and public API.
   * **Auth Guard** protects routes from unauthorized users.
   * **Flash Message Module** allows for efficient and nice looking alerts.
   * **Vulnerabilities** which are the most common such as front-end validation, authentication, xss, sanitazion others have been covered using effective security techniques.


* **Color pallette :** :art: 

![Colors](images/task_list_color_palette.png?raw=true "Color Palette")
