import {makeKeywordsBold} from './Message'

describe('message', () => {
  describe('divideStringByKeywords', () => {
    it('should highlight hello', () => {
      const string = 'Hello, my name is Rupert.'
      const keywords = ['Hello', 'my name is', 'product']
      const highlighted = makeKeywordsBold(string, keywords)
      expect(highlighted).toBe('<b>Hello</b>, <b>my name is</b> Rupert.')
    })
  })

})
