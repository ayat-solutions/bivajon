import { Dialog, Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Fragment, useState } from "react";

export default function CreateProject({ isOpen, setIsOpen }) {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/projects", values);
        if (isObjectEmpty(errors)) {
            setIsOpen(false);
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
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
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Create New Project
                                </Dialog.Title>{" "}
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col mb-4">
                                        <label className="mb-2 font-bold text-lg text-gray-900">
                                            Title
                                        </label>
                                        <input
                                            className="border py-2 px-3 text-grey-800"
                                            type="text"
                                            value={values.title}
                                            onChange={handleChange}
                                            id="title"
                                        />
                                        {errors.title && (
                                            <div className="m-1 text-red-500">
                                                {errors.title}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label className="mb-2 font-bold text-lg text-gray-900">
                                            Description
                                        </label>
                                        <textarea
                                            className="border py-2 px-3 text-grey-800"
                                            type="text"
                                            value={values.description}
                                            onChange={handleChange}
                                            id="description"
                                        />
                                        {errors.description && (
                                            <div className="m-1 text-red-500">
                                                {errors.description}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 ">
                                        <button
                                            type="submit"
                                            className="w-full font-bold inline-flex justify-center rounded-md border border-transparent text-white bg-indigo-500 px-4 py-2 text-sm hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
