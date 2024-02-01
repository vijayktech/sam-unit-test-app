'use strict';

import  {lambdaHandler}  from '../../app.mjs';
var context;

import { jest } from '@jest/globals';

  describe('fetch', () => {
    test('Notifies on error', async () => {
      const mockNotify = jest.fn();
      
      jest.unstable_mockModule('aws-sdk', () => ({
        notify: mockNotify
      }))
  
      const {AWS} = await import('aws-sdk');

      const event = {
        Records: [{ 
          s3: {
            bucket: { name: 'test-bucket' },
            object: { key: 'test.txt' }
          }
        }]
      };

      const response = await lambdaHandler(event, context);
      const s3Resp = JSON.parse(response.body); 
      
      expect(response.statusCode).toEqual(200);
      expect(s3Resp.bucket).toEqual('test-bucket');
      expect(s3Resp.file).toEqual('test.txt');

      // expect(mockNotify).toHaveBeenCalled(1);
    })
  });