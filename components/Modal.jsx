"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/features/modalSlice";
import EnquiryForm from "./forms/enquiry";

export default function Modal({ productTitle }) {
  // console.log(productTitle);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const onSubmit = (data) => console.log(data);

  let { isOpen } = useSelector((state) => state.modal);
  let dispatch = useDispatch();

  const handleClose = async (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(closeModal())}
        >
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* headings */}
                  <Dialog.Title
                    as="h3"
                    className="text-3xl leading-6 font-thin capitalize text-center text-slate-950"
                  >
                    contact{" "}
                    <span className="text-primary text-shadow font-bold italic">
                      panamax
                    </span>
                    <p className="text-sm text-slate-700 my-4">
                      Contact us we will contact with you soon.
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <EnquiryForm
                      product={productTitle}
                      isProductDisabled={false}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
