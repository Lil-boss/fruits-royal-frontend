import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Example() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null);
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [qty, setQty] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(`https://fruitsroyal.herokuapp.com/api/inventory/${id}`)
                    .then(res => { setQty(res.data) })
            } catch {
                toast.error('Something went wrong', { id: "wrong" });
            }
        }
        fetchData();
    }, [id]);


    const onSubmit = data => {
        const previousQty = Number(qty.quantity);
        const newQty = Number(data.quantity);
        const totalQty = previousQty + newQty;
        const previousPrice = Number(qty.price) * totalQty;
        const totalPrice = JSON.stringify(previousPrice);
        const newQtyObj = JSON.stringify(totalQty);
        try {
            axios.put(`https://fruitsroyal.herokuapp.com/api/inventory/${id}`, {
                quantity: newQtyObj,
                totalPrice: totalPrice
            })
                .then(res => { toast.success("Stock success", { id: "success" }); });
        } catch {
            toast.error("Added failed", { id: "failed" });
        }
    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        </Dialog.Title>
                                        <div className='grid grid-cols-2 gap-3 '>
                                            <div className='p-8'>
                                                <p>Add Quantity</p>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input {...register("quantity", { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                                        <label htmlFor="productName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                                    </div>
                                                    <button className='h-10 w-24 bg-[#FB9900] rounded-md text-white mt-10'>Stock</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* button area */}
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Link to={`/inventory/${id}`}>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog >
        </Transition.Root >
    )
}