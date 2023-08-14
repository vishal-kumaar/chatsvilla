"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full min-h-screen py-14 px-4 sm:px-10 bg-[#f5f3f3] dark:bg-[#161616] flex flex-col gap-y-6 justify-center items-center rounded-r-xl">
      <h1 className="font-signika font-bold text-2xl sm:text-3xl text-[#68647a] dark:text-white">
        Update Profile
      </h1>
      <div className="mb-5 relative w-fit">
        <Image
          alt="user-profile"
          src="/images/user.svg"
          height={160}
          width={160}
          className="w-40 h-40 rounded-full"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={handleButtonClick}
          className="absolute bottom-0 left-28 bg-[#f5f3f3] dark:bg-[#161616] rounded-full flex justify-center items-center px-1 pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="655.359"
            height="655.359"
            className="w-6 h-6 fill-[#161616] dark:fill-white"
            viewBox="0 0 6.827 6.827">
            <g>
              <path d="M1.1.96h4.627c.047 0 .089.019.12.05h-.001c.03.03.05.072.05.118v3.568a.168.168 0 0 1-.168.168H4.605l.204-.207h.879v-3.49H1.138v3.49h2.451l-.204.207H1.1a.168.168 0 0 1-.168-.168V1.128c0-.046.019-.088.05-.119.03-.03.072-.049.118-.049z" />
              <path d="M1.387 4.078a.107.107 0 0 0 .151.15l1.27-1.268.958.958a.107.107 0 0 0 .15-.15L2.884 2.734a.107.107 0 0 0-.151 0L1.387 4.077z" />
              <path d="M3.3 3.302a.107.107 0 0 0 .152.151l.878-.878.958.959a.107.107 0 0 0 .151-.151L4.406 2.349a.107.107 0 0 0-.152 0l-.953.953zM2.187 1.564a.519.519 0 0 1 .368.889.519.519 0 0 1-.889-.368.519.519 0 0 1 .52-.52zm.217.304a.306.306 0 0 0-.524.217.306.306 0 0 0 .524.217.306.306 0 0 0 0-.434zM3.481 5.023l.364.358-.149.152-.364-.359zM4.69 3.794l.365.359-.15.151-.363-.358z" />
              <path d="m3.815 5.55-.666.317-.139-.136.302-.674.021-.03 1.44-1.463a.259.259 0 0 1 .128-.072.17.17 0 0 1 .158.042l.25.246a.17.17 0 0 1 .045.158.259.259 0 0 1-.07.13l-1.44 1.461-.03.021zm-.502.01.397-.189 1.426-1.448a.07.07 0 0 0 .01-.013l-.214-.211a.071.071 0 0 0-.013.01L3.493 5.159l-.18.402z" />
            </g>
          </svg>
        </button>
      </div>
      <form className="flex flex-col justify-center gap-y-4 w-full md:w-7/12">
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl shadow-md">
          <svg
            className="w-4 h-4 stroke-[#807c97] dark:stroke-[#161616]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 0 24 32">
            <path
              strokeWidth="2"
              d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z"></path>
          </svg>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent text-base text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl shadow-md">
          <p className="text-[#807c97] dark:text-black font-signika">@</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent text-base text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="w-4 h-4 fill-none stroke-[#807c97] dark:stroke-black">
            <path
              strokeWidth="10"
              d="M112.863 100.6a3.037 3.037 0 0 1-2.6-1.49l-4.016-6.961-4.984 2.871a2.982 2.982 0 0 1-1.491.4 3 3 0 0 1-2.9-3.777 2.966 2.966 0 0 1 1.4-1.821l3.241-1.875a2.01 2.01 0 0 0 .735-2.735L92.264 67.93a5.933 5.933 0 0 0-5.19-2.983c-.517 0-5.934 1-8.128 1a26.082 26.082 0 0 1-4.478-.386 33.22 33.22 0 0 1-6.837-2.057 27.519 27.519 0 0 1-16.26-26.037 28.729 28.729 0 0 1 1.82-8.91 27.668 27.668 0 0 1 13.482-14.812 27.065 27.065 0 0 1 12.15-2.853 27.525 27.525 0 0 1 19.658 46.861 6.024 6.024 0 0 0-.995 7.217l9.96 17.25a2.005 2.005 0 0 0 1.217.935 3.941 3.941 0 0 0 1.505-.211l3.552-2.05a3 3 0 0 1 4.1 1.086 3.082 3.082 0 0 1 .309 2.277 3 3 0 0 1-1.41 1.84l-5.282 3.049 4.019 6.954a2.933 2.933 0 0 1 .3 2.275 2.99 2.99 0 0 1-2.891 2.222zM78.856 16.9a21.518 21.518 0 0 0-19.107 11.669c-.285.586-2.858 6.071-2.314 11.542a22.438 22.438 0 0 0 2.811 9.059 21.229 21.229 0 0 0 6.774 7.194 23.062 23.062 0 0 0 11.93 3.576 21.522 21.522 0 0 0-.094-43.04z"
            />
            <path
              strokeWidth="10"
              d="M67.084 66.531a13.75 13.75 0 0 1-.5.92 21.356 21.356 0 0 1-13.073 10.024 21.718 21.718 0 0 1-5.616.745 21.525 21.525 0 1 1 .125-43.049c.169 0 .342 0 .532.006a58.422 58.422 0 0 1 1.237-5.95s-1.371-.067-1.934-.067a27.152 27.152 0 0 0-23.741 13.77 27.615 27.615 0 0 0 4.006 32.864 6.026 6.026 0 0 1 .954 7.236l-10.08 17.459a2.994 2.994 0 0 1-2.054 1.455 5.808 5.808 0 0 1-2.456-.637l-1.421-1.164a2.09 2.09 0 0 0-2.305-.2 1.978 1.978 0 0 0-.954 2.059l2.257 13.398a1.962 1.962 0 0 0 .955 1.41 5.165 5.165 0 0 0 1.714.148l12.744-4.758a2 2 0 0 0 0-3.742s-2.916-1.078-3.509-2.452a2.817 2.817 0 0 1 .225-2.511l10.055-17.423a6 6 0 0 1 5.194-2.944 6.2 6.2 0 0 1 1.557.2 27.321 27.321 0 0 0 6.947.9A27.6 27.6 0 0 0 71.9 70.253c.291-.514.994-1.948.994-1.948a30.781 30.781 0 0 1-5.81-1.774zM63.2 33.781c-.542-.365-1.88-1.138-1.88-1.138a18.62 18.62 0 0 0-.926 6.509 21.346 21.346 0 0 1 8.895 15.094 36.944 36.944 0 0 0 6.132 2.1A27.523 27.523 0 0 0 63.2 33.781z"
            />
          </svg>
          <select className="w-full bg-transparent text-base outline-none text-[#807c97] dark:text-[#3d3d3d] -ml-1">
            <option value="unknown" disabled selected>
              Gender
            </option>
            <option value="Male" className="text-black">
              Male
            </option>
            <option value="Female" className="text-black">
              Female
            </option>
            <option value="Unknown" className="text-black">
              Don{"\u0027"}t want to specify
            </option>
          </select>
        </div>
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-4 py-1.5 rounded-2xl shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 fill-[#807c97] dark:fill-[#161616] mr-0.5"
            viewBox="52.51 53.67 194.98 192.66">
            <path d="M247.007 75.015a5.18 5.18 0 0 0-2.506-6.881l-29.979-13.979a5.175 5.175 0 0 0-6.881 2.505l-15.506 33.253-7.58-22.266a5.18 5.18 0 0 0-4.903-3.51H77.857a5.18 5.18 0 0 0-4.015 1.908L53.67 90.814a5.181 5.181 0 0 0-.886 4.938l50.065 147.069a5.177 5.177 0 0 0 4.9 3.509h109.384a5.179 5.179 0 1 0 0-10.356H111.457L64.917 99.262l24.411.005h.001a5.18 5.18 0 0 0 4.363-2.389 5.179 5.179 0 0 0 .334-4.963L85.96 74.491h89.987l9.866 28.98-34.446 73.872a5.157 5.157 0 0 0-.454 2.708l-.006.002 3.257 32.149a5.179 5.179 0 0 0 2.963 4.172 5.18 5.18 0 0 0 5.099-.413l26.722-18.17v-.002a5.15 5.15 0 0 0 1.781-2.091l15.307-32.823 27.214 79.944a5.182 5.182 0 0 0 6.569 3.233 5.179 5.179 0 0 0 3.233-6.571l-30.693-90.164 34.648-74.302zM68.576 88.907l8.063-9.9 4.585 9.903-12.648-.003zm146.263-23.18 20.594 9.604-4.733 10.151-20.597-9.603 4.736-10.152zm-52.711 122.347 13.464 6.278-12.002 8.16-1.462-14.438zm21.405-1.444-20.594-9.604 42.79-91.763 20.593 9.604-42.789 91.763z"></path>{" "}
            <path d="m204.084 103.424-20.928 44.88a5.178 5.178 0 1 0 9.385 4.376l20.927-44.879a5.175 5.175 0 0 0-2.503-6.881 5.179 5.179 0 0 0-6.881 2.504zM183.379 160.077a5.178 5.178 0 0 0-6.881 2.504l-.706 1.514a5.18 5.18 0 0 0 4.69 7.367 5.181 5.181 0 0 0 4.697-2.992l.705-1.512a5.178 5.178 0 0 0-2.505-6.881zM92.145 109.681a5.178 5.178 0 1 0 0 10.356h.86a5.176 5.176 0 0 0 5.177-5.178 5.177 5.177 0 0 0-5.177-5.178h-.86zM161.201 120.036a5.178 5.178 0 1 0 0-10.356h-52.449a5.178 5.178 0 0 0 0 10.356h52.449zM154.821 155.233a5.178 5.178 0 0 0-5.178-5.178h-43.754a5.177 5.177 0 0 0-5.177 5.178 5.177 5.177 0 0 0 5.177 5.178h43.754a5.178 5.178 0 0 0 5.178-5.178zM119.633 190.429a5.178 5.178 0 1 0 0 10.356h20.944a5.177 5.177 0 0 0 0-10.356h-20.944z"></path>{" "}
          </svg>
          <input
            type="text"
            placeholder="Bio"
            className="w-full bg-transparent text-base text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
          />
        </div>
        <div className="mt-3 flex items-center gap-4 justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white py-1 w-24 rounded-2xl text-sm shadow-md font-roboto">
            Save
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white py-1 w-24 rounded-2xl text-sm shadow-md font-roboto">
            Cancal
          </button>
        </div>
      </form>
    </div>
  );
}
