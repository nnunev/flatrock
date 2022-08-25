import { useMutation } from "@apollo/client";
import { GET_USERS } from "../queries/userQueries";
import { FaTrash } from "react-icons/fa";
import { DELETE_USER } from "../mutations/userMutations";

export default function DeleteUserModal({ user }) {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: user.id },
    refetchQueries: [{ query: GET_USERS }], //or update the cache
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#deleteUserModal"
      >
        <FaTrash />
      </button>

      <div
        className="modal fade"
        id="deleteUserModal"
        aria-labelledby="deleteUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteUserModalLabel">
                Delete User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={deleteUser}>
                <div className="mb-3">
                  <p>{user.name}</p>
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
