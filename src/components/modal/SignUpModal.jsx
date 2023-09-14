import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import SignUpCeo from "./signUpDetail/SignUpCeo";
import SignUpUser from "./signUpDetail/SignUpUser";
import SignUpSelected from "./signUpDetail/SignUpSelected";
import Button from "../ui/Button";
import SignUpLogin from "./signUpDetail/SignUpLogin";

export default function SignUpModal({
  open,
  handleClose,
  selectedOption,
  handleOptionSelect,
}) {
  //TODO: modalRef handleCloseModal 모달창 밖에 클릭해도 창이 안닫히게 되는건지 이해가 안된다 여튼 의도한게 된거긴한데....
  // const modalRef = useRef(null);
  const handleCloseModal = (e) => {
    // if (modalRef.current && modalRef.current.contains(e.target)) {
    //   // setOpen(false);
    // }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:justify-center sm:items-center">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          {selectedOption === ""
                            ? "가입할 유형을 선택해 주세요"
                            : "회원 가입"}
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  {/* Login */}
                  {selectedOption === "" && <SignUpLogin />}
                  {/* select */}
                  <div className="flex justify-center mt-4">
                    {selectedOption === "" ? (
                      <SignUpSelected
                        selectedOption={selectedOption}
                        handleOptionSelect={handleOptionSelect}
                      />
                    ) : null}
                  </div>
                  {selectedOption === "사장님" ? (
                    <SignUpCeo />
                  ) : selectedOption === "기본회원" ? (
                    <SignUpUser />
                  ) : null}
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Button type="button" onClick={handleClose} text="Close" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
