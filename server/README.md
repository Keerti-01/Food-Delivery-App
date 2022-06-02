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

