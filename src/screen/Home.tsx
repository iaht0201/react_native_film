import { View, StatusBar, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { convertImage } from '../utils/convert';
import ButtonClick from '../componnet/Button';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
    const [data, setData] = useState<MovieResponse | null>(null);
    const [movideData, setmMovideData] = useState<Movie[] | []>()
    const isCarousel = React.useRef(null)

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=vi&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGY4ZWRiYmRjMjdhYjlhMTY5NDI3NzJmMjlhYTE2YyIsInN1YiI6IjYyMzBhOTVkYTNlNGJhMDA3YTBmNzFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h83z0IPVOl7rpXB6GegUon1QJYsuu1PpZkZ93lBwJk8`
                }
            };

            try {
                const response = await fetch(url, options);
                const movieResponse: MovieResponse = await response.json();
                setData(movieResponse);
                setmMovideData(movieResponse.results)
            } catch (error) {
                console.error('Lỗi khi lấy danh sách phim đang chiếu:', error);
            }
        };

        fetchNowPlaying();
    }, []);

    return (

        <View className="flex-1 items-center justify-center w-max h-max bg-yellow-700 flex-row">
            <StatusBar hidden />
            <ScrollView horizontal={true}>
                {movideData?.map((item, index) => {
                    return (
                        <View key={index} >
                            <ImageBackground
                                className='h-screen w-screen '
                                source={{ uri: convertImage(item.poster_path, "original") }}>
                                <LinearGradient
                                    colors={['#00000000', '#000000']}
                                    className='relative h-screen w-full z-0 '>

                                    <View className='absolute top-[60%] w-full px-3 z-40'>
                                        <Text className='text-white font-bold text-[25px] w-[70%]'>
                                            {item.title}
                                        </Text>
                                        <Text className='text-white font-normal text-[14px] mt-2 text-justify ' numberOfLines={7}>
                                            {item.overview}
                                        </Text>
                                        <View className='w-[100%] flex flex-row justify-center mt-2'>
                                            <ButtonClick title="Chi tiết" width={120} height={60} onPress={() => console.log("Chi tiết")} />
                                            <ButtonClick title="Trailer" width={120} height={60} onPress={() => console.log("Trailer")} />
                                        </View>
                                    </View>
                                    {/* <View className='absolute top-[10%] w-full px-3 z-40'>
                                     
                                    </View> */}
                                    <View className='absolute w-full h-full justify-center items-center z-50'>
                                        <TouchableOpacity
                                            onPress={() => {
                                                console.log("Xem ngay")
                                            }}
                                            className=' w-[60px] h-[60px] bg-slate-500 opacity-90 justify-center 
                                    items-center rounded-full  z-auto'>
                                            <Ionicons name="play" size={40} color="brown" />
                                        </TouchableOpacity>
                                    </View>
                                </LinearGradient>

                            </ImageBackground>
                        </View>
                    );
                })}
            </ScrollView>

        </View>
    );
};
export default Home