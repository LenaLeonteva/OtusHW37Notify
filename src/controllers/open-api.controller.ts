import {api, operation, param, requestBody} from '@loopback/rest';
import {Message} from '../models/message.model';

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
    constructor() {} 
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
     throw new Error('Not implemented'); 
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
     throw new Error('Not implemented'); 
  }
}

