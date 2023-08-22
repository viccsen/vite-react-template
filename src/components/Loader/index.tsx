/*
 * @Author: Viccsen
 * @Date: 2023-08-22 17:11:42
 * @LastEditTime: 2023-08-22 18:18:19
 * @LastEditors: Viccsen
 * @Description:
 */
import './index.less'

type Props = {
  text?: string
}

const Loading: React.FC<Props> = (props) => {
  const { text } = props
  return (
    <div>
      <span className="context-loading-container" />
      <p style={{ color: '#333', fontSize: 14 }}>{text}</p>
    </div>
  )
}

export default Loading
