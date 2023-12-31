import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tags.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { FindTagsDto } from './dto/find-tags.dto';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  async getAllTags(query: FindTagsDto) {
    const tags = this.tagRepository.findAndCount({
      take: query.limit,
      skip: query.offset,
    });
    return tags;
  }

  async createTag(dto: CreateTagDto) {
    const tags = this.tagRepository.create(dto);
    return this.tagRepository.save(tags);
  }

  async updateTags() {}
}
