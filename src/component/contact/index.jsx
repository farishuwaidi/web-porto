import React from 'react'

const index = () => {
  return (
    <div className='py-20 px-12'>
        <div className="w-full">
            <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="text-primary text-3xl font-semibold mb-2">Contact Me</h4>
            </div>
        </div>

        <form>
            <div className="w-full lg:w-1/2 lg:mx-auto">
                <div className="w-full px-4 mb-8">
                    <label for="name" className="text-lg font-bold text-primary">
                        Nama
                    </label>
                    <input type="text" name="nama" id="nama" className="w-full bg-slate-200 text-dark rounded-md p-3 focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                </div>
                <div className="w-full px-4 mb-8">
                    <label for="email" className="text-lg font-bold text-primary">
                        Email
                    </label>
                    <input type="email" name="email" id="email" className="w-full bg-slate-200 text-dark rounded-md p-3 focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                </div>
                <div className="w-full px-4 mb-8">
                    <label for="pesan" className="text-lg font-bold text-primary">
                        Pesan
                    </label>
                    <textarea name="pesan" id="pesan" className="w-full bg-slate-200 text-dark rounded-md p-3 focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-24"></textarea>
                </div>
                <div className="w-full px-4">
                    <button className="text-lg font-semibold py-3 text-white bg-primary w-full rounded-lg transition duration-300">Kirim</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default index
