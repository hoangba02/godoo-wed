import { Avatar, Center, SimpleGrid, Text } from '@mantine/core';
import { images } from 'assets/images';
import React, { useState } from 'react';

function FavoritePlace() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleOptionsFavorite = favorite => {
    if (favorites.includes(favorite)) {
      const newFavorites = favorites.filter(value => value !== favorite);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Favorite place to go
      </Text>
      <SimpleGrid
        cols={3}
        sx={{
          gap: '8px 12px',
          width: '100%',
        }}
      >
        {favoriteMap.map((favorite, index) => (
          <Center
            key={index}
            sx={{
              gap: 8,
              flexDirection: 'column',
              border: '1px solid #D6D6D6',
              borderRadius: 8,
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: favorites.includes(favorite.name)
                ? '#E46125'
                : '#FFFFFF',
            }}
            onClick={() => {
              handleOptionsFavorite(favorite.name);
            }}
          >
            <Avatar size={48} src={favorite.favorite} />
            <Text
              sx={{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: '20px',
                userSelect: 'none',
                color: favorites.includes(favorite.name) ? '#FFFFFF' : '#000',
              }}
            >
              {favorite.name}
            </Text>
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}
export default FavoritePlace;

export const favoriteMap = [
  { name: 'Restaurant', favorite: images.Restaurant },
  { name: 'Street food stall', favorite: images.StreetFood },
  { name: 'Billiards', favorite: images.Billiards },
  { name: 'Bar', favorite: images.BarsBub },
  { name: 'Karaoke', favorite: images.Karaoke },
  { name: 'Picnic', favorite: images.Picnic },
  { name: 'Pub', favorite: images.BarsBub },
  { name: 'Cinema', favorite: images.Movies },
  { name: 'Walking Street', favorite: images.WalkingStreet },
  { name: 'Lounge', favorite: images.Lounge },
  { name: 'Cafe', favorite: images.Cafe },
  { name: 'Bookstores', favorite: images.Bookstores },
  { name: 'Bowlings', favorite: images.Bowlings },
  { name: 'Malls', favorite: images.StreetFood },
];
