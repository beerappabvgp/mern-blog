import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";


export default function SignUp() {
  const [formData , setFormData] = useState({});
  const [errorMessage , setErrorMessage] = useState(null);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value.trim() });
  }

  // handling form submission and also proxy is set
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup' , {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(formData)
      });
      const data = await res.json();
      // setting error message from server response if it throws error
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* for left side */}
        <div className="flex-1">
          <Link
            to="/"
            className="sm:text-xl font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              People's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
            Welcome to People's blog, your go-to destination for insightful and
            engaging content! Whether you're a passionate writer looking to
            share your thoughts or a curious reader eager to discover new
            perspectives, Blog Haven is the perfect platform for you. Explore a
            diverse range of topics, from technology and lifestyle to travel and
            personal development. Our user-friendly interface makes it easy to
            navigate through an extensive collection of articles crafted by
            talented writers from around the globe.
          </p>
        </div>
        {/* for right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* first field */}
            <div className="">
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
            </div>
            {/* second field */}
            <div className="">
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@blog.com" id="email" onChange={handleChange} autoComplete="username"/>
            </div>
            {/* third field */}
            <div className="">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} autoComplete="current-password"/>
            </div>
            {/* button */}
            <Button gradientDuoTone='purpleToPink' type="submit" disabled = {loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading...</span></>
                ) : 'Sign Up'
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
