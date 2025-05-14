import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'd99da96a-62fa-4e1c-a43f-ea9d9e424deb'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  }
}
