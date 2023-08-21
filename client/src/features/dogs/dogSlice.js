import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { async } from "regenerator-runtime";
import dogService from './dogService'


const initialState = {
    dog: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

//Create Dog
export const createDog = createAsyncThunk('dogs/create', async (dogsData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await dogService.createDog(dogsData, token)
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();
  return thunkAPI.rejectWithValue(message);
    
  }

})

//Get user dogs
export const getDogs = createAsyncThunk('dogs/getAll', async(_, thunkAPI) =>{
  try {
    const token = thunkAPI.getState().auth.user.token
    return await dogService.getDogs(token)
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();
  return thunkAPI.rejectWithValue(message);
  }
})

//Delete user Dog
export const deleteDog = createAsyncThunk('dogs/delete', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await dogService.deleteDog(id, token)
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();
  return thunkAPI.rejectWithValue(message);
    
  }

})

  export const dogSlice = createSlice({
    name: 'dog',
    initialState,
    reducers: {
      reset:(state) => initialState
    },
    extraReducers: ( builder ) => {
      builder
            .addCase(createDog.pending, (state) => {
              state.isLoading = true
            })
            .addCase(createDog.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.dog.push(action.payload)
            })
            .addCase(createDog.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
            })
            .addCase(getDogs.pending, (state) => {
              state.isLoading = true
            })
            .addCase(getDogs.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.dog = action.payload
            })
            .addCase(getDogs.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
            })
            .addCase(deleteDog.pending, (state) => {
              state.isLoading = true
            })
            .addCase(deleteDog.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              //Doing this would immediately remove the dog from the UI else it would delay
              state.dog = state.dog.filter((dog) => dog._id !== action.payload.id)
            })
            .addCase(deleteDog.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
            })
    }
  })

export const { reset } = dogSlice.actions;
export default dogSlice.reducer;