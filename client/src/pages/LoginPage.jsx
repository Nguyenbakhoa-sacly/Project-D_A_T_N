import React from 'react'
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Đăng nhập tài khoản</div>
          <button className="flex gap-2 justify-center mt-6 border rounded-md py-2 text-sm text-gray-50  from-slate-800 bg-gradient-to-r to-slate-400 bg-gray-100 hover:bg-gray-200">
            <span className=" flex items-center">
              <FcGoogle size={20} /></span>
            <span>Đăng nhập bằng Google</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">Hoặc đăng nhập bằng Google</span>
            </div>
          </div>
          <div className="mt-10">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6">
                <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Địa Chỉ Email:</label>
                <div className="relative">
                  <input
                    placeholder='VD: example@gmail.com'
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    type="email"
                    {...register("email", {
                      required: "Vui lòng nhập email.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Địa chỉ email không hợp lệ"
                      }
                    })}
                  />
                </div>
                <p className='text-sm text-red-600'>
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="flex flex-col mb-6">
                <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Mật Khẩu:</label>
                <div className="relative">
                  <input type="password" {...register("password", {
                    required: "Vui lòng nhập password.",
                  })} className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Mật khẩu" />
                </div>
                <p className='text-sm text-red-600'>
                  {errors.password && errors.password.message}
                </p>
              </div>
              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <a href="#" className="inline-flex text-xs sm:text-sm text-slate-500 hover:text-slate-700">Quên mật khẩu?</a>
                </div>
              </div>
              <div className="flex w-full">
                <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base from-slate-800 bg-gradient-to-r to-slate-400 rounded py-2 w-full transition duration-150 ease-in">
                  <span className="mr-2 text-slate-50 uppercase">Đăng nhập</span>
                  <MdLogin size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link to={'/signup'} className="inline-flex items-center font-bold text-slate-500 hover:text-slate-700 text-xs text-center">
              <IoMdPersonAdd size={20} />
              <span className="ml-2">Bạn chưa có tài khoản?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
