'use client';
import { contactSchema, ContactSchema } from '@/schema/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import { Button } from '../ui/button';
import { Dialog } from '@/components/ui/dialog';
import DialogCard from './DialogCard';
import { useState } from 'react';
import { formStatusData } from '@/data/contactData';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: 'asas',
      email: 'as@mail.com',
      message: 'asdadasdasd',
    },
    resolver: zodResolver(contactSchema),
  });

  const [open, setOpen] = useState(false);
  const [isSuccess] = useState(true);

  const onSubmit = (data: ContactSchema) => {
    setOpen(true);
    console.log(data);
    reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 lg:gap-6 pb-7 '
      >
        <InputField
          register={register}
          name='name'
          errorMessage={errors.name?.message}
        />

        <InputField
          register={register}
          name='email'
          errorMessage={errors.email?.message}
        />

        <InputField
          register={register}
          name='message'
          errorMessage={errors.message?.message}
          isTextArea={true}
        />

        <Button disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        <DialogCard
          formStatus={isSuccess ? formStatusData.success : formStatusData.error}
          setOpen={() => setOpen(false)}
        />
      </form>
    </Dialog>
  );
};

export default ContactForm;
