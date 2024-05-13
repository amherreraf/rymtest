import {rickAndMortyApi} from '../../config/api/rickAndMortyApi';
import {Character} from '../../domain/entities/character';
import type {Result} from '../../infrastructure/interfaces/rickAndMortyApi.interface';
import {CharacterMapper} from '../../infrastructure/mappers/character.mapper';

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const url = `/character/${id}`;
    const {data} = await rickAndMortyApi.get<Result>(url);
    const character = await CharacterMapper.raMApiPaginatedToEntity(data);
    return character;
  } catch (error) {
    throw new Error('Error getting Character by id');
  }
};
