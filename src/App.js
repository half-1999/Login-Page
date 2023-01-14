import './App.css';
import React from 'react'

export default function App() {
  return (
     
      <>
     <div className='container'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="#" height={150} width={150} /> <hr />
      <div className="d-flex form ">
      <h2 className='float-start mx-3 login'>Login</h2>
      <h2 className='float-end mx-3 login'>Signup</h2> <br /> <br />
      </div> <br />
      <div>
      <input type="email" id="email" placeholder='Email Address' className='form-control'/>
      <input type="password" id="password" placeholder='Password' className='form-control'/>
      <button type="submit" id='btn' className='form-control'>Login</button>
      </div>
      <div>
      <h6 className='float-end forgot'>Forgot Password?</h6>
      </div> <br />

      <div class="img text-center">
  <div class="row">
    <div class="col">
        <img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" height="20" alt="" />
    </div>
    <div class="col">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" height="20" alt="" />
    </div>
    <div class="col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" height="20" alt="" />
    </div>
  </div>
</div>

      <h6>Don't have an account? <span style={{color:"#E70B89", cursor:"pointer"}}>Create new one!</span></h6>
      <h6>By signing up, you are agree with our <span style={{color:"#E70B89" , cursor:"pointer"}}>Terms&Conditions</span></h6>
     </div>
    </>
     
  )
}
