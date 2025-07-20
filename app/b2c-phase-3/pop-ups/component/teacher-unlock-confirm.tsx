'use client';

import React from 'react';
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page';

const ConfirmUnlockPopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
            <div className="bg-white flex flex-col w-full rounded-2xl items-center text-center px-2 py-4 ">
               
                
                    <h2 className=' text-black text-sm  sm:text-md md:text-xl  mb-2 font-semibold '>Confirmation</h2>
                    
                


                {/* Description */}
                <p className="text-xs  sm:text-sm md:text-md  max-w-[50ch] font-regular  lg:text-sm text-black mt-2">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci. 
                </p>

                {/* CTA Button */}
                <div className="mt-4 flex justify-center items-center gap-3">
                    <button
                        onClick={onClose}
                        className="bg-[#6b7280]/8 text-[#6b7280] font-medium text-sm px-4 py-2.5 rounded-full  transition"
                    >
                        Cancel
                    </button>
                     <button
                        onClick={onClose}
                        className="bg-[#3366ff] text-white font-medium text-sm px-4 py-2.5 rounded-full  transition"
                    >
                        Confirm
                    </button>
                </div>
                </div>
            
        </TeacherB2CBaseModal>
    );
};

export default ConfirmUnlockPopup;
