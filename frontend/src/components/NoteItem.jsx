import {useSelector} from 'react-redux'

function NoteItem({note}) {
    const {user} = useSelector((state) => state.auth)

  return (
    <div className='note' style={{
        backgroungColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
        color: note.isStaff ? '#fff' : '#000'
    }}>
        <h4>Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}</h4>
        <div className='note-date'>{new Date(note.createdAt).toLocaleString('en-US')}</div>
        <div>{note.text}</div>
    </div>
  )
}

export default NoteItem