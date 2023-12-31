import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getWeatherAPI } from "../../api/getWeatherAPI";

const getWeatherWithStatus = createAsyncThunk(
  'weather/get',
  async (payload) => {
    const response = await getWeatherAPI(payload);
    return response.data;
  }
)

const weather = createSlice({
  name: 'weather',
  initialState:{
    weathers: {},
    areaNum: '011000',
    status: ''
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherWithStatus.pending,(state)=>{
      state.status = 'Loading...'
    })
    .addCase(getWeatherWithStatus.fulfilled,(state,action)=>{
      state.status = '取得済'
      state.weathers = action.payload;
    })
    .addCase(getWeatherWithStatus.rejected,(state)=>{
      state.status = '天気予報取得エラー'
    })
  }
});

export { getWeatherWithStatus };
export default weather.reducer