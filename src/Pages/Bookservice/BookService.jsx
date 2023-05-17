import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/Authproviders';

const BookService = () => {
  const checkoutService = useLoaderData();
  const { title, _id, price, img } = checkoutService;

  const { user } = useContext(AuthContext)


  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const date = form.date.value;
    const location = form.location.value;

    const order = {
      customerName: name,
      img,
      email,
      date,
      service_id: _id,
      service: title,
      location,
      password
    };
    console.log(order);

    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Order successfully placed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }
      })

  }
  return (
    <div>
      <h2 className='text-center'>Book Service:{title} </h2>

      <div className="card flex-shrink-0 w-full p-10 shadow-2xl bg-base-100">
        <form onSubmit={handleBookService} >
          <div className="card-body  ">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email"
                    name='email' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Password" name="password" className="input input-bordered" />

                </div>
              </div>
              <div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input type="date"
                    name='date' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input type="text" placeholder="Location" name="location" className="input input-bordered" />

                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Due Amount</span>
                  </label>
                  <input type="text" name="due" defaultValue={'$ ' + price} className="input input-bordered" />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">


              <input className="btn bg-red-600 text-white" type="submit" value="Confirm Order" />
            </div>
          </div>
        </form>
      </div>
    </div>


  );
};

export default BookService;