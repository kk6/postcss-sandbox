import React from 'react'
import TestUtils from 'react-addons-test-utils'
import assert from 'assert'
import TweetBox from '../src/js/TweetBox'

describe('TweetBox', () => {
  let tweetButton, tweetArea

  before('render and locate element', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <TweetBox />
    )
    tweetButton = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'button'
    )
    tweetArea = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'textarea'
    )
  })

  it('<textarea>が空ならボタンがdisabledになっていること', () => {
    assert(tweetButton.getAttribute('disabled') === '')
  })

  it('<textarea>のplaceholderの検証', () => {
    assert(tweetArea.getAttribute('placeholder') === '進捗どうですか？')
  })
})
