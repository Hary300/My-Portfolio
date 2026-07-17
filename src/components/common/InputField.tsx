import { ContactSchema } from '@/schema/contactSchema';
import { FieldPath, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  register: UseFormRegister<ContactSchema>;
  name: FieldPath<ContactSchema>;
  errorMessage?: string;
  isTextArea?: boolean;
}

const InputField = ({
  register,
  name,
  errorMessage,
  isTextArea = false,
}: InputFieldProps) => {
  const label = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <label htmlFor={name} className='font-semibold text-sm lg:text-md'>
          {label}
        </label>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </div>
      {isTextArea ? (
        <textarea
          rows={5}
          {...register(name)}
          className='outline-0 border rounded-xl lg:rounded-2xl py-2 px-4'
        />
      ) : (
        <input
          type='text'
          {...register(name)}
          className='outline-0 border rounded-xl lg:rounded-2xl py-2 px-4'
        />
      )}
    </div>
  );
};

export default InputField;
