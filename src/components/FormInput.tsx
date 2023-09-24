import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

interface IData{
  id: string
  province_id: string
  name: string
  regency_id: string
  district_id: string
}

interface IFormProps {
  title?: string;
  data?: IData[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export default class FormInput extends React.Component<IFormProps> {
  render() {
    const { title, data, onChange } = this.props;
    return (
      <FormControl>
        <FormLabel>{title}</FormLabel>
        <Select bg='white' onChange={onChange} mt="-2" placeholder={`Select a ${title}`}>
          {
            data?.map((e)=> (
              <option key={e.id } value={e.name}>{e.name}</option>
            ))
          }
        </Select>
      </FormControl>
    );
  }
}
