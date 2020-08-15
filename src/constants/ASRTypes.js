import PropTypes from 'prop-types'

export const TranscriptType = PropTypes.shape({
  endOffsetMsec: PropTypes.number.isRequired,
  startOffsetMsec: PropTypes.number.isRequired,
  utterance: PropTypes.string.isRequired,
})

export const MessageType = PropTypes.shape({
  spotted: PropTypes.arrayOf(PropTypes.string).isRequired,
  transcript: TranscriptType,
})

