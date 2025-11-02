import React from 'react'

const HomeImage = () => {
  return (
    <div className='absolute bottom-0 left-0 bg-slate-700/75 text-white grid grid-cols-3 w-full text-center h-28 items-center rounded-b-xl'>
      <div>
        <p className='text-5xl font-bold'>80+</p>
        <h2 className='mt-3 font-bold'>Proyek Selesai</h2>
      </div>
      <div>
        <p className='text-5xl font-bold'>20+</p>
        <h2 className='mt-3 font-bold'>Vendor</h2>
      </div>
      <div>
        <p className='text-5xl font-bold'>10+</p>
        <h2 className='mt-3 font-bold'>Team Work</h2>
      </div>
    </div>
  )
}

export default HomeImage;