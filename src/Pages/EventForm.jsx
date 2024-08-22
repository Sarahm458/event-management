import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const EventForm = () => {
  const initialValues = {
    eventName: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: null,
  };

  const validationSchema = Yup.object({
    eventName: Yup.string().required('Event name is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    location: Yup.string().required('Location is required'),
    description: Yup.string().required('Description is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const reader = new FileReader();
    reader.onloadend = () => {
      values.image = reader.result;
      events.push(values);
      localStorage.setItem('events', JSON.stringify(events));
      
      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Event was successfully created.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      resetForm();
    };
    reader.readAsDataURL(values.image);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ setFieldValue }) => (
        <Form className="space-y-4 p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-3 mb-10 max-h-screen">
          <div>
            <label htmlFor="eventName" className="block text-white">Event Name</label>
            <Field type="text" id="eventName" name="eventName" className="w-full p-2 rounded" />
            <ErrorMessage name="eventName" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="date" className="block text-white">Date</label>
              <Field type="date" id="date" name="date" className="w-full p-2 rounded" />
              <ErrorMessage name="date" component="div" className="text-red-500" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label htmlFor="time" className="block text-white">Time</label>
              <Field type="time" id="time" name="time" className="w-full p-2 rounded" />
              <ErrorMessage name="time" component="div" className="text-red-500" />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="block text-white">Location</label>
            <Field type="text" id="location" name="location" className="w-full p-2 rounded" />
            <ErrorMessage name="location" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="description" className="block text-white">Description</label>
            <Field as="textarea" id="description" name="description" className="w-full p-2 rounded" />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="image" className="block text-white">Image</label>
            <input type="file" id="image" name="image" className="w-full p-2 rounded" onChange={(event) => {
              setFieldValue("image", event.currentTarget.files[0]);
            }} />
          </div>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Create Event</button>
        </Form>
      )}
    </Formik>
  );
};

export default EventForm;
