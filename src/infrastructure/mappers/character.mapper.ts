import type {Character} from '../../domain/entities/character';
import type {Result} from '../interfaces/rickAndMortyApi.interface';

export class CharacterMapper {
  static raMApiPaginatedToEntity(data: Result): Character {
    return {
      id: data.id,
      name: data.name,
      image: data.image,
      species: data.species,
      type: data.type,
      gender: data.gender,
    };
  }
}
