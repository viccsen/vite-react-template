/*
 * @Author: Viccsen
 * @Date: 2023-08-16 11:19:01
 * @LastEditTime: 2023-08-16 17:32:12
 * @LastEditors: Viccsen
 * @Description:
 */
import './index.less'

import styles from './index.module.less'

const Index = () => {
  return (
    <div className={[styles['home'], 'bugu-home-page'].join(' ')}>
      <div></div>
      <h1>Vite + React + React-router</h1>
      <h2>eslint + prettier + stylelint</h2>
      <h3>lint-staged + husky</h3>
      <p className="read-the-docs">
        <NavLink to="/about">About</NavLink>
      </p>
      <AntButton>测试</AntButton>
      <AntDatePicker />
      <AntColorPicker />
    </div>
  )
}

export default Index
