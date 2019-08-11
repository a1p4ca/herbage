import PropTypes from 'prop-types'
import AdminModal from './AdminModal'

function FilterModal({ post, modalHandler, states, filter }) {
  const [pending, setPending] = states[0]
  const [accepted, setAccepted] = states[1]
  const [rejected, setRejected] = states[2]

  const handleSubmit = async e => {
    e.preventDefault()
    modalHandler('filter')
    filter()
  }
  return (
    <AdminModal modalName="filter" post={post} modalHandler={modalHandler}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pending-checkbox">대기</label>
        <input
          id="pending-checkbox"
          type="checkbox"
          name="filter"
          checked={pending}
          onChange={e => setPending(e.target.checked)}
        />
        <label htmlFor="accepted-checkbox">승인</label>
        <input
          id="accepted-checkbox"
          type="checkbox"
          name="filter"
          checked={accepted}
          onChange={e => setAccepted(e.target.checked)}
        />
        <label htmlFor="rejected-checkbox">거부</label>
        <input
          id="rejected-checkbox"
          type="checkbox"
          name="filter"
          checked={rejected}
          onChange={e => setRejected(e.target.checked)}
        />
        <br />
        <button type="submit">필터</button>
        <style jsx>{`
          * {
            font-family: 'Spoqa Han Sans', sans-serif;
          }

          .error {
            text-align: center;
            font-size: 14px;
          }

          input {
            display: inline-block !important;
            margin-right: 10px;
          }

          button {
            margin-top: 10px;
          }
        `}</style>
      </form>
    </AdminModal>
  )
}

FilterModal.propTypes = {
  post: PropTypes.object,
  modalHandler: PropTypes.func,
  states: PropTypes.array,
  filter: PropTypes.func
}

export default FilterModal