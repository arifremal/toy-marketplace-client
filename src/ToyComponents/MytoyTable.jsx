const MytoyTable = ({ toy }) => {
  const {
    name,
    price,

    detail_description,
    available_quantity,
  } = toy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{detail_description}</td>
      <td>{available_quantity}</td>
      <td>
        <p>{price}</p>
      </td>
      <th>
        <button className="btn btn-ghost  bg-green-500 text-white hover:bg-black btn-xs">
          Edit
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs  bg-green-500 text-white hover:bg-black">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MytoyTable;
