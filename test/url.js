const should = require('should')
const url = require('../lib/url')

describe('#url', () => {
  // 測試有沒有
  it('should return the url when testhttps://www.104.com.tw test', done => {
    const substringUrl = url('testhttps://www.104.com.tw test');
    substringUrl.should.equal('https://www.104.com.tw')
    done()
  })

  // 測試有沒有回傳
  it('should return url with tail when testhttps://www.104.com.twtest', done => {
    const substringUrl = url('testhttps://www.104.com.twtest');
    substringUrl.should.equal('https://www.104.com.twtest')
    done()
  })
})
