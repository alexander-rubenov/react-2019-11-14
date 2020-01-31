import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'

const Review = props => {
  const {review, user} = props
  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={16} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user.name}
          </Typography.Title>
          <Typography.Text className={styles.comment}>
            {review.text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={8} align="right" className={styles.rateColumn}>
          <Rate disabled value={review.rating} />
        </Col>
      </Row>
    </Card>
  )
}

export const ReviewPropTypes = {
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

Review.propTypes = {
  review: PropTypes.shape(ReviewPropTypes),
}

const mapStateToProps = (state, ownProps) => {
  const review = state.reviews[ownProps.id]
  const user = state.users[review.userId]

  return {
    review,
    user,
  }
}

export default connect(mapStateToProps)(Review)
