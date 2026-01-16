import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInput } from '.';

type Props = {
  name: string;
  control: any;
  errors?: any;
} & React.ComponentProps<typeof FormInput>;
const RHFInput = ({ name, control, errors, ...props }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormInput
          {...props}
          value={field.value}
          error={errors?.[name]?.message}
          onChangeText={field.onChange}
        />
      )}
    />
  );
};

export default RHFInput;
