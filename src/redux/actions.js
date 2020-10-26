const setFetching = (fetching) => ({
  type: 'SET_FETCHING',
  fetching: fetching
})


const fetchSuccessed = (data) => ({
  type: 'FETCH_SUCCESSED',
  data: data
})

const fetchFailed = (err)=>({
  type: 'FETCH_FAILED',
  error: err
})

export {
  setFetching,
  fetchSuccessed,
  fetchFailed
}
