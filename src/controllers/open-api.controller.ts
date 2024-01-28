import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Response, RestBindings, api, operation, param, requestBody} from '@loopback/rest';
import {Message} from '../models/message.model';
import {MessageRepository} from '../repositories';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      Message: {
        type: 'object',
        properties: {
          order_id: {
            type: 'string',
          },
          user_id: {
            type: 'number',
            format: 'int32',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  paths: {},
})
export class OpenApiController {
  constructor(
    @repository(MessageRepository) private repo: MessageRepository,
    @inject(RestBindings.Http.RESPONSE) private response: Response,
  ) { }
  /**
   *
   *
   * @param _requestBody Create message
   */
  @operation('post', '/message/send', {
    operationId: 'sendMessage',
    responses: {
      '200': {
        description: 'OK',
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Message',
          },
        },
      },
      description: 'Create message',
      required: true,
    },
  })
  async sendMessage(@requestBody({
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Message',
        },
      },
    },
    description: 'Create message',
    required: true,
  }) _requestBody: Message): Promise<unknown> {
    let result = await this.repo.create(_requestBody);
    console.log(result)
    return result;
  }
  /**
   *
   *
   * @param orderId ID of order
   * @returns OK
   */
  @operation('get', '/message/{orderId}', {
    operationId: 'getMessage',
    responses: {
      '200': {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Message',
            },
          },
        },
      },
    },
    parameters: [
      {
        name: 'orderId',
        in: 'path',
        description: 'ID of order',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
  })
  async getMessage(@param({
    name: 'orderId',
    in: 'path',
    description: 'ID of order',
    required: true,
    schema: {
      type: 'string',
    },
  }) orderId: string): Promise<Message> {
    const message = await this.repo.findById(orderId);
    return message
  }
}

