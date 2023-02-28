import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../api/movieApi';

const initialState = {
  movieMatch: [],
  isLoading: false,
  isLoaded: false,
  isReady: false
}

export const getMovieInfo = createAsyncThunk(
  'movies/getMovieInfo',
  async () => {
    const response = await movieApi.get("?apikey=8b007b86&s=harry");
    return response.data
  }
)

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieInfo.fulfilled , (state , {payload}) => {
      state.movieMatch = payload.Search;
      state.isLoading = false;
      state.isLoaded = true;
      state.isReady = true;
    })
    builder.addCase(getMovieInfo.rejected , (state) => {
      state.movieMatch = 'failed';
      state.isLoading = false;
      state.isLoaded = true;
      state.isReady = false;
    })
    builder.addCase(getMovieInfo.pending , (state) => {
      state.movieMatch = 'waiting';
      state.isLoading = true;
      state.isLoaded = false;
      state.isReady = false;
    })
  }
})

//export const { getMovieInfo } = MovieSlice.actions;
export default MovieSlice.reducer;