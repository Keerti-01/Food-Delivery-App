############   API PLANNING   #############

==> Authentication API
==> foods
==> restuarants
==> menu
==> orders
==> payments -----> razorpay
==> reviews
==> user
==> images


// static and methods in 

==> both are functions
==> diffrence between static and methods is that:::::
    *methods* - when we instantiate our model or when we assign our model to another variable only then we use Methods that we define inside the model(like Object instantiation ic c/C++)

    *static* - static comes pre-attached to our model, can be used directly with the model

    => models will be available once we instantiate it, then we will get the methods
    => but static can be used directly wthour instantiating the model

    => eg: static--> userModel.ourStatic()
           method--> checkUserByEmail.ourMethods()


************** Validation ***************
*public route* --> whenever user requests some data from server, the data will be provided to the user without any authentication/ logged in

*private route* --> whenever user requests somethng , the server will look for authentication token i.e. JWT Token, if the token is present then it will check whether it is valid or not
--> if JWT token is valid then only server will send response to the user
--> if JWT token is not valid then the server will send 401- unauthorized status code


*****validation****
-> auth *
-> food *
-> image * 
-> menu -> food validation *
-> order -> user validation *
-> restuarant  *
-> review *
-> user *

*private routes* --> orders 


