import classNames from 'classnames/bind'
import React from 'react'
import style from './style.module.scss';
import banner from '../../../static/img/banner/Rammor_Shop_Banner_5_1500x.jpg'
type Props = {}
const cx = classNames.bind(style)
const Banner = (props: Props) => {
  return (
    <div className={cx('wrapper-banner')}>
        <img src={banner} loading="lazy" alt="" />
    </div>
  )
}

export default Banner