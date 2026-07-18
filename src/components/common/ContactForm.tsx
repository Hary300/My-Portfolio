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
import { motion } from 'motion/react';
import { fadeUp } from '@/motion/motion';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [open, setOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      const isSuccess =
        (crypto.getRandomValues(new Uint8Array(1))[0] & 1) === 0;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!isSuccess) {
        throw new Error('Something went wrong');
      }
      console.log(data);
      setSuccess(true);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setSuccess(false);
      }
    } finally {
      setOpen(true);
    }
  };
  return (
    <>
      <motion.form
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogCard
          formStatus={isSuccess ? formStatusData.success : formStatusData.error}
          setOpen={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
};

export default ContactForm;
