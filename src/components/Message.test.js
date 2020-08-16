import Message from './Message'

describe('Message', () => {
  describe('makeKeywordsBold', () => {
    it('should highlight hello', () => {
      const string = 'Hello, my name is Rupert.'
      const keywords = ['Hello', 'my name is', 'product']
      const highlighted = Message.makeKeywordsBold(string, keywords)
      expect(highlighted).toBe('<b>Hello</b>, <b>my name is</b> Rupert.')
    })
  })

})
