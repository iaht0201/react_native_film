import { View, Text } from 'react-native'
import React from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { fetchApi } from '../utils/api'

const fetchNowPlaying = async () => {
    let url = "3/movie/now_playing";
    await fetchApi.get<MovieResponse[]>(url, { language: 'vi', page: 1 }).then(movies => {
        return movies;
    })
        .catch(error => {
            console.error('Lỗi khi lấy danh sách phim đang chiếu:', error);
        });
}

export { fetchNowPlaying }