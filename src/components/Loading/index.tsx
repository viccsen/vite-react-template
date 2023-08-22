/*
 * @Author: Viccsen
 * @Date: 2023-08-22 17:11:42
 * @LastEditTime: 2023-08-22 17:50:11
 * @LastEditors: Viccsen
 * @Description:
 */
import './index.less'

import Loader from '../Loader'

const Loading: React.FC = () => {
  return (
    <div className="context-loading-wrapper">
      <Loader text="加载中..." />
    </div>
  )
}

export default Loading
