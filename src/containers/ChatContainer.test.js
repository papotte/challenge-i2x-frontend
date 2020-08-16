import {combineMessagesByTime} from './ChatContainer'

describe('ChatContainer', () => {
  describe('CombineMessagesByTime', () => {
    it('should combine messages ', () => {
      const messages = [
        {
          spotted: ['hello', 'my name is'],
          transcript: {
            endOffsetMsec: 6090,
            startOffsetMsec: 630,
            utterance: 'Hello, my name is Nala.',
          },
        },
        {
          spotted: ['product', 'buy'],
          transcript: {
            endOffsetMsec: 8090,
            startOffsetMsec: 7090,
            utterance: 'I would like to buy a product.',
          },
        },
        {
          spotted: [],
          transcript: {
            endOffsetMsec: 13800,
            startOffsetMsec: 12800,
            utterance: 'Separate Message',
          },
        },
      ]
      const parsedMessages = combineMessagesByTime(messages)
      expect(parsedMessages).toEqual([
            [
              {
                spotted: ['hello', 'my name is'],
                transcript: 'Hello, my name is Nala.',
              },
              {
                spotted: ['product', 'buy'],
                transcript: 'I would like to buy a product.',
              }],
            [
              {
                spotted: [],
                transcript: 'Separate Message',
              }],
          ],
      )
    })
  })

})
