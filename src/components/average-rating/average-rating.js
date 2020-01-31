import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const rate = useSelector(state => selectAverageRating(state, props))

  return (
    <div>
      <Rate value={2} disabled allowHalf />
    </div>
  )
}

// AverageRating.defaultProps = {
//   reviews: [],
// }

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default AverageRating
