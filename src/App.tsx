import React from "react";
import { DataCity, DataProvinsi, DataSubDistrict, DataVillage } from "./api/FetchApi";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import FormInput from "./components/FormInput";

interface IData{
  id?: string
  name?: string
  regency_id?: string
  province_id?: string
  district_id?:string
}
export default class App extends React.Component<IData> {
  state = {
    dataProvinces: [],
    dataCity: [],
    dataSubDistrict: [],
    dataVillage: [],
    selectedProvinceId: "",
    selectedCity: "",
    selectedSubDistrict: "",
    selectedVillage: "",
  };

  //get data
  async getDataProvinces() {
    try {
      this.setState({ dataProvinces: await DataProvinsi() });
    } catch (error) {
      console.log(error);
    }
  }

  HandleChangeCity = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = event.target.value;
    const data = this.state.dataProvinces.find((e: IData)=> e.name === provinceId)
    if (provinceId !== "")
      this.setState({ dataCity: await DataCity(data?.id) });
  };
  HandleChangeSubDistrict = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    const data = this.state.dataCity.find((e: IData)=> e.name === selectedCity)

    if (selectedCity !== "")
      this.setState({ dataSubDistrict: await DataSubDistrict(data?.id) });
  };
  HandleChangeVillage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubDistrict = event.target.value;
    const data = this.state.dataSubDistrict.find((e: IData)=> e.name === selectedSubDistrict)

    if (selectedSubDistrict !== "")
      this.setState({ dataVillage: await DataVillage(data?.id) });
  };

  componentDidMount(): void {
    this.getDataProvinces();

  }

  render() {
    const { dataProvinces, dataCity, dataSubDistrict, dataVillage } =
      this.state;

    return (
      <Container h="100vh">
        <Heading textAlign="center">DATA WILAYAH</Heading>
        <Stack mt={10} rounded="lg" p="6" h="400px" shadow="md">
          <FormInput
            title="Provinces"
            onChange={this.HandleChangeCity}
            data={dataProvinces}
          />
          <FormInput title="City"
          onChange={this.HandleChangeSubDistrict}
          data={dataCity} />
          <FormInput title="Subdistrict"
          onChange={this.HandleChangeVillage}
          data={dataSubDistrict} />
          <FormInput title="Village" data={dataVillage} />


        </Stack>
      </Container>
    );
  }
}
