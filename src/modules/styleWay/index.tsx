import classnames from 'classnames';

const _bool = true
export const StyleWay_1 = () => {
  return (
    <>
      <div className={_bool ? 'border' : ''}>
        style ways
      </div>
      <div style={{ color: 'yellow', display: _bool ? "block" : 'none' }}>
        style ways
      </div>
      <div className={classnames('border', _bool ? 'yellow' : '')}>
        style ways
      </div>
    </>
  )
}

