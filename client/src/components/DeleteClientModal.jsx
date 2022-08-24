import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";

export default function DeleteClientModal({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }], //or update the cache
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#deleteClientModal"
      >
        <FaTrash />
      </button>

      <div
        className="modal fade"
        id="deleteClientModal"
        aria-labelledby="deleteClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteClientModalLabel">
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
              <form onSubmit={deleteClient}>
                <div className="mb-3">
                  <p>{client.name}</p>
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
