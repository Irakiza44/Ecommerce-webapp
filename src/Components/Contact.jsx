import { motion } from 'framer-motion'
import React from 'react'
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.8 }
      }>
      <h2 className='text-center text-3xl md:text-4xl lg:text-4xl font-bold mt-7'>Feel Free to Contact us</h2>
      <iframe className='w-full mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.388421159345!2d30.032742522494978!3d-1.9119499732061513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca39344f0f83f%3A0xbc5266da7180b181!2sKaruruma%2C%20Kigali!5e0!3m2!1sen!2srw!4v1679824589850!5m2!1sen!2srw" width="600" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
        <div className='max-w-[50%] m-auto mt-10'>
          <form
            action="https://formspree.io/f/mgebyggy"
            method="POST"
            className='flex flex-col gap-12 '
          >
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              className='outline-none border-2 p-4'
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              className='outline-none border-2 p-4'

              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              className='outline-none border-2 p-4'
              placeholder="Enter Your Message here"
              required></textarea>

            <button type='submit' className='bg-black text-white px-5 py-3 text-md duration-150 hover:bg-zinc-900 '>Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
