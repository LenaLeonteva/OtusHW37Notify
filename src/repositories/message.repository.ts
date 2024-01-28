import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MessagesDataSource} from '../datasources';
import {Message, MessageRelations} from '../models';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.order_id,
  MessageRelations
> {
  constructor(
    @inject('datasources.messages') dataSource: MessagesDataSource,
  ) {
    super(Message, dataSource);
  }
}
