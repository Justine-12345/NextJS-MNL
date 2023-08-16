import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export default function loading() {
    return (
        <div className=' w-100vw flex justify-center mt-[20vh] ' >
            <SkeletonTheme baseColor="#111827" highlightColor="#374151">
                <p>
                    <Skeleton className='w-full max-w-[50vw] min-w-[50vw] max-h-[60vh] h-[60vh] mb-6' count={3} />
                </p>
            </SkeletonTheme>
        </div>


    )
}
