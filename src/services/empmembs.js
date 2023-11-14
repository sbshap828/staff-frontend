import api from "./apiConfig.js";

//let url = "https://my-api-staff-project-ef413adaef92.herokuapp.com/api"
export const getEmpMembs = async () => {
  try {
    const response = await api.get("/staffs");
    console.log("getting iffo")
    return response.data;
    //console.log(response.data)
  } catch (error) {
    console.error("Error: Getting EmpMembs: ", error);
  }
};

// let url2 = "https://my-api-staff-project-ef413adaef92.herokuapp.com/api/staffs/"

// export const getEmpDetail = async () => {
//   try {
//     const response = await api.get(url2)
//      return response.data;
//   } catch (error) {
//     console.error("Error: Getting one Employee: ", error);
//   }
// };


// export const getCats = async () => {
//   try {
//     const response = await api.get("/cats");
//     return response.data;
//   } catch (error) {
//     console.error("Error: Getting all Cats", error);
//   }
// };

// export const getCat = async (id) => {
//   try {
//     const response = await api.get(`/cats/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const createCat = async (catData) => {
//   try {
//     const response = await api.post("/cats", catData);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateCat = async (id, catData) => {
//   try {
//     const response = await api.put(`/cats/${id}`, catData);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteCat = async (id) => {
//   try {
//     const response = await api.delete(`/cats/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
