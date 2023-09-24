export const DataProvinsi = async () => {
  try {
    const response = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const DataCity = async (provinceId: string) => {
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const DataSubDistrict = async (cityId: string) => {
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const DataVillage = async (SubDistrictId: string) => {
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${SubDistrictId}.json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

