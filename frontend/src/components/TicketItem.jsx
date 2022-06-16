import {Link} from 'react-router-dom'

function TicketItem({ticketData}) {
  return (
    <div className='ticket'>
        <div>{new Date(ticketData.createdAt).toLocaleString('en-US')}</div>
        <div>{ticketData.product}</div>
        <div className={`status status-${ticketData.status}`}>{ticketData.status}</div>
        <Link to={`/ticket/${ticketData._id}`} className='btn btn-reverse btn-sm'>
            View
        </Link>
    </div>
  )
}

export default TicketItem