import { useState } from 'react';
// import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../mutations/userMutations';
import { GET_USERS } from '../queries/userQueries';

export default function AddUserModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [usergroup, setUsergroup] = useState('User');

  const [addUser] = useMutation(ADD_USER, {
    variables: { firstName, lastName, email, status, usergroup },
    refetchQueries: [{ query: GET_USERS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //Simple form validation
    if (firstName === '' || lastName === '' || email === '') {
      return alert('Please fill in all fields');
    }

    addUser(firstName, lastName, email, status, usergroup);

    setFirstName('');
    setLastName('');
    setEmail('');
    setStatus('');
    setUsergroup('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-success'
        data-bs-toggle='modal'
        data-bs-target='#addUserModal'
      >
        <div className='d-flex align-items-center'>
          {/* <FaUser className='icon' /> */}
          <div>+</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addUserModal'
        aria-labelledby='addUserModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addUserModalLabel'>
                Add User
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Last Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Status</label>
                  <input
                    type='text'
                    className='form-control'
                    id='status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Role</label>
                  <input
                    type='text'
                    className='form-control'
                    id='usergroup'
                    value={usergroup}
                    onChange={(e) => setUsergroup(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

