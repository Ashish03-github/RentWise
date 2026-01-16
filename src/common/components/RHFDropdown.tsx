import React from 'react';
import { Controller } from 'react-hook-form';
import { Dropdown } from '@/common/components';

type Props = {
  name: string;
  control: any;
  errors?: any;
} & React.ComponentProps<typeof Dropdown>;

const RHFDropdown = ({ name, control, errors, ...props }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Dropdown
          {...props}
          value={field.value}
          onChange={field.onChange}
          error={errors?.[name]?.message}
        />
      )}
    />
  );
};

export default RHFDropdown;
