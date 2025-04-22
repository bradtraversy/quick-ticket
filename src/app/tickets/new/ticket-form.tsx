'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createTicket } from '@/actions/ticket.actions';
import { toast } from 'sonner';

const NewTicketForm = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: '',
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success('Ticket submitted successfully!');
      router.push('/tickets');
    }
  }, [state.success, router]);

  return (
    <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200'>
      <h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>
        Submit a Support Ticket
      </h1>
      {state.message && !state.success && (
        <p className='text-red-500 mb-4 text-center'>{state.message}</p>
      )}
      <form action={formAction} className='space-y-4 text-gray-700'>
        <input
          className='w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          type='text'
          name='subject'
          placeholder='Subject'
        />
        <textarea
          className='w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          name='description'
          placeholder='Describe your issue'
          rows={4}
        />
        <select
          className='w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700'
          name='priority'
          defaultValue='Low'
        >
          <option value='Low'>Low Priority</option>
          <option value='Medium'>Medium Priority</option>
          <option value='High'>High Priority</option>
        </select>
        <button
          className='w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-50'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicketForm;
