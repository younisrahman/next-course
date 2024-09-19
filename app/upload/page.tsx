'use client'
import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
    return (
        <>
            {publicId && <CldImage src={publicId} alt="Images" height={270} width={180} />}
            <CldUploadWidget
                uploadPreset='ml_default'
                onSuccess={(result) => {
                    if (result.event !== 'success') return
                    const info = result.info
                    if (typeof info === 'object' && 'public_id' in info) {
                        setPublicId(info.public_id);
                    }
                }}
            >
                {({ open }) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage