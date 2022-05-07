import React, { useState, useEffect } from 'react';
import './inventory.css';

const Inventory = () => {

    const [allData, setData] = useState([]);
    //fetching data
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])


    return (
        <div className='bg-[#F2F2F3]'>
            <div className='container sidebar-mobile-responsive tablet-sidebar mx-auto mt-6 grid grid-cols-[160px_minmax(1000px,_1fr)]'>
                <div className='flex'>
                    <div className='mobile-none tablet-none'>
                        <p className='h-[40px]'><i className="fa fa-home"></i><span className='p-2'>Dashboard</span></p>
                        <p className='h-[40px]'><i className="fa fa-id-card"></i><span className='p-2'>Invetory</span></p>
                        <p className='h-[40px]'><i className="fa fa-file-text"></i><span className='p-2' >Documents</span></p>
                        <p className='h-[40px]'><i className="fa fa-cog"></i><span className='p-2'>Settings</span></p>
                    </div>
                </div>

                <div className='table-layout pl-8'>
                    {/* inventory data */}
                    <div>
                        <p className='inventory-responsive mt-4 font-[700] text-[20px]'>Inventory</p> <hr /> <br />

                        <div className='px-2 py-4 bg-white'>
                            <form className=''>
                                <div className=" relative text-[#88898E] mb-6">
                                    <span className=" bg-[#F2F2F3] rounded-[8px] absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg fill="none" stroke="currentColor" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </span>
                                    <input type="search" className="bg-[#F2F2F3] py-2  text-sm text-black pl-8 rounded-[8px] focus:outline-none input-width" placeholder="Search" autocomplete="off" />
                                </div>
                            </form>
                            {/* table start */}
                            <table className="">
                                <thead className=''>
                                    <tr className="bg-[#FDF4ED] h-[41px]">
                                        <td className="pl-8 table-data-responsive text-left"><i class="fa fa-square-o"></i></td>
                                        <td className="pl-8 table-data-responsive text-left">Date Updated <i class="fa fa-arrow-down"></i></td>
                                        <td className="pl-8 text-left text-responsive">Title <i class="fa fa-arrows-v"></i></td>
                                        <td className="table-data-responsive tablet-responsive py-2 pl-8 text-left">Details</td>
                                        <td className="pl-8 text-left text-responsive">Status</td>
                                        <td className="pl-8 text-left text-responsive">Quantity</td>
                                        <td className="pl-8 table-data-responsive text-left">Unit Price</td>
                                        <td className="pl-8 text-left text-responsive">Amount <i class="fa fa-arrows-v" aria-hidden="true"></i></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allData.map(single =>
                                            <tr>
                                                <td className="table-data-responsive pl-8 py-4"><i class="fa fa-square-o"></i> </td>
                                                <td className="table-data-responsive pl-8 py-4">{single.date} </td>
                                                <td className=" pl-8 py-4 text-responsive">{single.Title}</td>
                                                <td className="table-data-responsive tablet-responsive pl-8 py-4">{single.Details}</td>
                                                {
                                                    <td className=" pl-8 py-4 status"><span className='table-data-responsive text-responsive'>{single.Status}</span> <i style={{ 'color': single.active === 'active' ? 'green' : single.active === 'inactive' ? 'red' : 'yellow' }} className="fa fa-circle active "></i></td>
                                                }
                                                <td className="pl-8 py-4 text-responsive">{single.Quantity}</td>
                                                <td className="table-data-responsive pl-8 py-4">${single.Unit_price}</td>
                                                <td className="pl-8 py-4 text-responsive">${single.Amount}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            {/* items per page set up */}
                            <div className='flex justify-between pl-8'>
                                <div>
                                    <p className='shadow-lg mobile-none box-border border pt-2 pb-2 pr-8 pl-8 border-[#B2B2B6] items-center mobile-none'>10 items per page <i class="fa fa-angle-down pl-8"></i></p>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='shadow-lg box-border pt-2 pb-2 pr-8 pl-8 border border-[#B2B2B6]'>Page 1 of 5<i class="fa fa-angle-down pl-8"></i></span>
                                    <i class="fa fa-angle-left pt-2 pb-2 pr-8 pl-8 text-center border border-[#B2B2B6] ml-4" aria-hidden="true"></i> <i class="fa fa-angle-right pt-2 pb-2 pr-8 pl-8 flex place-items-center box-border border border-[#B2B2B6] ml-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Inventory;