import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EventForm = () => {
  const initialValues = {
    eventName: '',
    date: '',
    location: '',
    description: '',
  };

  const validationSchema = Yup.object({
    eventName: Yup.string().required('Event name is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
    description: Yup.string().required('Description is required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(values);
    localStorage.setItem('events', JSON.stringify(events));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="space-y-4 p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg mx-[15rem] mt-9">
        <div>
          <label htmlFor="eventName" className="block text-white">Event Name</label>
          <Field type="text" id="eventName" name="eventName" className="w-full p-2 rounded" />
          <ErrorMessage name="eventName" component="div" className="text-red-500" />
        </div>
        <div>
          <label htmlFor="date" className="block text-white">Date</label>
          <Field type="date" id="date" name="date" className="w-full p-2 rounded" />
          <ErrorMessage name="date" component="div" className="text-red-500" />
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
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Create Event</button>
      </Form>
    </Formik>
  );
};

export default EventForm;
