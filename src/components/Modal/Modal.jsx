import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import UseItem from '../../Hooks/UseItem';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Example() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null);
    const [product] = UseItem();
    const quantity = product?.quantity;
    const [val, setVal] = useState();
    useEffect(() => {
        setVal(quantity)
    }, [quantity]);

    const handleDecrement = () => {
        if (val > 0) {
            setVal(parseInt(val) - 1);
        }
    }
    const submited = () => {
        if (val > 0) {
            const data = val - 1;
            const fetchData = async () => {
                try {
                    await axios.put(`https://fruitsroyal.herokuapp.com/api/inventory/${productId}`,
                        {
                            quantity: JSON.stringify(data)
                        })
                        .then(res => { toast.success("Delivered success", { id: "success" }); });
                } catch {
                    toast.error("delivered failed", { id: "failed" })
                }
            }
            fetchData();
        }
    }

    const process = () => {
        handleDecrement()
        submited();
    }
    const updateItem = (id) => {
        navigate(`/item/${id}`);
    }
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
                                            {product?.productName}
                                        </Dialog.Title>
                                        <div className='grid grid-cols-2 gap-3 '>
                                            <div>
                                                <img className='h-3/4 w-full rounded-md p-4' src={product?.imageUrl} alt="" />
                                            </div>
                                            <div className='p-8'>
                                                <p className='text-1xl mt-4 '>Description: {product?.description}</p>
                                                <p className='text-1xl mt-4 '>supplier: {product?.supplierName}</p>
                                                <p id="quantity" className='text-1xl mt-4 flex'>Quantity:<input value={val} onInput={e => setVal(e.target.value)} className='w-10 outline-none' readOnly /><sup className='text-red-600'>box</sup></p>
                                                <p className='text-1xl mt-4 '>Price: {product?.price}</p>
                                                <div className='flex'>
                                                    <button onClick={process} className='h-10 w-24 bg-[#FB9900] rounded-md text-white mt-10'>Delivered</button>
                                                    <button onClick={() => updateItem(product?._id)} className='mx-2 h-10 w-24 bg-[#FB9900] rounded-md text-white mt-10'>Restock</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* button area */}
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Link to="/">
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