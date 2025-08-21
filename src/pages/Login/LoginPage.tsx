import medicine from "../../assets/medicine.png"
import doctors from "../../assets/doctors.png"
import { AuthApi } from "../../api/auth"
import { useState } from "react"


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async()=> {
        try {
           const response =  await AuthApi.Login({email, password})
           if(response.success) {
            alert('Login successful')
           }
        } catch (error) {
            console.error("Login failed ", error)
            alert("Login failed")
        }
    }



  return (
    <>
        <div className="bg-primary/20 h-screen w-screen flex flex-row justify-center items-center">
            <div className="bg-gray-100 shadow-lg w-[400px] p-10 pb-2 rounded-xl "
            data-aos="fade-right"
            >
                {/* logo and title  */}
                <div className="flex gap-2 mb-6 items-center justify-center">
                    <img src={medicine} alt="logo" width={25} height={25}/>
                    <h1 className="text-3xl font-ui">Pharmacy</h1>
                </div>
                <div className="flex flex-col justify-center items-center text-center mb-5">
                    <h1 className="text-2xl font-ui">Welcome back</h1>
                    <p className="font-body">Enter your credentials to access your pharmacy dashboard</p>
                </div>
                {/* email password fields  */}
                <div className="flex flex-col gap-1.5 ">
                    <label className="font-ui">Email</label>
                    <input type="email" placeholder="Enter your email" className="
                    border border-gray-300 p-1.5 rounded
                    " 
                    onChange={(e)=> setEmail(e.target.value)}
                    />

                    <label className="font-ui">Password</label>
                    <input type="text" placeholder="Enter your password" 
                    className="border p-1.5 rounded border-gray-300"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                {/* sign in btn   */}
                <div className="flex w-full h-9 rounded-md bg-primary/80 mt-2.5 items-center justify-center">
                    <button className="font-ui text-white font-bold"
                    onClick={handleLogin}
                    >Sign In</button>
                </div>

                <div className="flex justify-center gap-1 mt-5 ">
                    <p className="font-body">Don't remember password?</p>
                    <button className="hover:text-primary/80 font-ui">Reset</button>
                </div>
            </div>
                <img src={doctors} alt="Doctors"  className="max-h-screen" data-aos="fade-left"
                data-aos-duration="3000"
                />
        </div>
    </>
  )
}

export default LoginPage