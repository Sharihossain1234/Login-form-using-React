import './App.css';

function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
       <div className="imgs">
           <div className="container-image">
           

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
           
             <input type="text" placeholder="Enter user name" className="name"/>
           </div>
           <div className="second-input">
         
             <input type="password" placeholder="Enter Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;
