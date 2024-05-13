import {rickAndMortyApi} from '../../config/api/rickAndMortyApi';
import {Character} from '../../domain/entities/character';
import type {
  RaMAPIPaginatedResponse,
  Params,
} from '../../infrastructure/interfaces/rickAndMortyApi.interface';
import {CharacterMapper} from '../../infrastructure/mappers/character.mapper';

export const getCharacter = async (
  page: number,
  search: string = '',
): Promise<Character[]> => {
  try {
    const url = '/character';
    const limit = 10;
    const params: Params = {
      page,
      limit,
    };
    if (search) {
      params.name = search;
    }
    const {data} = await rickAndMortyApi.get<RaMAPIPaginatedResponse>(url, {
      params,
    });
    const characters = data.results.map(item =>
      CharacterMapper.raMApiPaginatedToEntity(item),
    );
    return characters;
  } catch (error) {
    throw new Error('Error getting Characters');
  }
};
