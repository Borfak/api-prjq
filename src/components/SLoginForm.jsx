import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";


const SLoginForm = () => {
  let [isOpen, setIsOpen] = useState(false);

  let [loginIsOpen, setLoginIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openLoginModal() {
    setLoginIsOpen(true);
  }

  function closeLoginModal() {
    setLoginIsOpen(false);
  }

  const [loginData, setLoginData] = useState({
    phoneNum: "",
    password: "",
  });

  const LoginHandleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://api.osbb.devserver.cc/authentication/login";

    const request = {
      clientId: "OSBB_CABINET_WEB",
      clientType: "WEB",
      deviceId: "3eb8f083-a18e-4ecd-a3b0-259553c75a5f",
      login: phone,
      password: password,
    };
    console.log(request);

    window.localStorage.setItem("login", phone);
    window.localStorage.setItem("password", password);

    setPhone("");
    setPassword("");
  };


  const loginHandleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
  };

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePhone = (value) => {
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(value)) {
      setPhoneError("Please enter a valid Ukrainian phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhone(phone) && validatePassword(password)) {
      console.log("Form submitted");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={openLoginModal}
        className="rounded-md mb-5 ml-3 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Login
      </button>

      <Transition appear show={loginIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <div className="w-full max-w-xs">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    >
                      <div className="mb-2">
                        <label className="font-bold" htmlFor="PhoneNumber">
                          Phone Number
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onBlur={() => validatePhone(phone)}
                        />
                          {phoneError && (
                            <span className="text-red-500 font-bold">
                              {phoneError}
                            </span>
                          )}
                      </div>
                      <div className="mb-2">
                        <label className="font-bold" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => validatePassword(password)}
                        />
                        {passwordError && (
                          <span className="text-red-500 font-bold">
                            {passwordError}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-center">
                        <button
                        onClick={LoginHandleSubmit}
                          className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SLoginForm;
